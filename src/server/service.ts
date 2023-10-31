import { Empty } from "@bufbuild/protobuf"
import { ConnectError, ServiceImpl } from "@connectrpc/connect"
import { typedKeyValue } from "@constl/bohr-db"
import { Events, OrbitDB, createOrbitDB } from "@orbitdb/core"
import { OrbitDBService } from "@proto/orbitdbrpc/v1/orbitdb_connect"
import { AvailableDatabasesResponse, ControllerTypes, Database, OpenDatabaseRequest, OpenDatabaseResponse } from "@proto/orbitdbrpc/v1/orbitdb_pb"
import { JSONSchemaType } from "ajv"
import assert from "assert"
import { IPFS, create as createIPFS } from "ipfs-core"
// Register orbit-db-kuiper database types. IMPORTANT - must call before creating orbit instance !
export default class OrbitDBServiceImplementation implements ServiceImpl<typeof OrbitDBService> {
  ipfs!: IPFS
  orbitdb!: OrbitDB
  constructor() {
    return (async (): Promise<OrbitDBServiceImplementation> => {
      // Call async functions here
      this.ipfs = await createIPFS()
      this.orbitdb = await createOrbitDB({ ipfs: this.ipfs })
      return this
    })() as unknown as OrbitDBServiceImplementation
  }

  openDatabase = async (_req: OpenDatabaseRequest) => {
    try { 
      const db = await this.orbitdb.open("test", { Database: Events<string>() })
        .catch((e: Error) => {
          console.log(e)
          throw new ConnectError(e.message)
        })
    
      const schema: JSONSchemaType<Partial<{ [key: string]: {val : string} }>> = {
        type: "object",
        additionalProperties: {
          type: "object",
          properties: {
            val: {
              type: "string", 
            },
          }, 
          required: ["val"]
        },
      }
      const typedDB = typedKeyValue(
        {
          db: db,
          schema: schema
        }
      )
      return new OpenDatabaseResponse(
        {
          dbAddress: db.address,
          isNew: false,
        }
      )
    } catch (e) {
      console.log(e)
      assert(e instanceof Error)
      throw new ConnectError(e.message)
    }
  }

  stopService = (_req: Empty) => { 
    return new Empty()
  }

  availableDatabases = (_req: Empty) => { 
    const databases: Database[] = []
    Object.values(this.orbitdb.databases)
      .forEach((db) => { 
        // convert enum value to number
        const enumVal = ControllerTypes["orbitdb".toUpperCase() as unknown as number] as unknown as number // double assertion bc typings are wrong
        // type-safe way to convert into enum type
        const enumValue: ControllerTypes | undefined = ControllerTypes[ControllerTypes[enumVal] as keyof typeof ControllerTypes]
        if (!enumValue) {
          throw new ConnectError("Could not find enum value for ControllerTypes")
        }
        databases.push(new Database({address: db.address, type: db.type, controller: enumValue , name: db.name}))
      })

    return new AvailableDatabasesResponse(
      {
        databases: databases
      }
    )
  }

  closeDatabase = (_req: Empty) => {
    return new Empty()
  }
}