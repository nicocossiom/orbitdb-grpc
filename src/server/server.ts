import { Databases, Documents, Events, KeyValue, OrbitDB, createOrbitDB } from "@orbitdb/core"
import { Empty } from "@proto/google/protobuf/empty"
import * as pb from "@proto/orbitdb"
import assert from "assert"
import { create as createIPFS } from "ipfs-core"
import { IPFS } from "ipfs-core-types"
import { CallContext, Server, ServerError, Status, createServer } from "nice-grpc"

class OrbitServer implements pb.OrbitDBServiceImplementation {
  orbit!: OrbitDB
  ipfs!: IPFS
  server!: Server
  static async create(server: Server) {
    const orbit_server = new OrbitServer()
    orbit_server.ipfs = await createIPFS()
    orbit_server.orbit = await createOrbitDB({ ipfs: orbit_server.ipfs })
    console.log("OrbitServer created")
    orbit_server.server = server
    return orbit_server
  }
  private static fromDBTypeStringToEnum(type: string) {
    switch (type) {
      case "events":
        return pb.DatabaseTypes.DATABASE_TYPES_EVENT
      case "keyvalue":
        return pb.DatabaseTypes.DATABASE_TYPES_KEYVALUE
      case "documents":
        return pb.DatabaseTypes.DATABASE_TYPES_DOCUMENT
      default:
        return pb.DatabaseTypes.UNRECOGNIZED
    }
  }
  availableDatabases(request: Empty, context: CallContext): Promise<pb.AvailableDatabasesResponse> {
    const res = pb.AvailableDatabasesResponse.create()
    Object.keys(this.orbit.databases).forEach((key) => {
      const db = this.orbit.databases[key]
      assert(db)
      res.databases.push({
        name: db.name,
        address: db.address,
        type: OrbitServer.fromDBTypeStringToEnum(db.type),
        controller: db.access.type == "orbit" ?
          pb.ControllerTypes.CONTROLLER_TYPES_ORBITDB : pb.ControllerTypes.CONTROLLER_TYPES_IPFS
      })
    })
    return Promise.resolve(res)
  }

  async stopService(request: Empty, context: CallContext): Promise<Empty> {
    await this.server.shutdown().catch(
      (e) => {
        console.error(e)
        this.server.forceShutdown()
        throw new ServerError(Status.UNAVAILABLE, "Error shutting down server")
      }
    )
    return Empty.create()
  }

  closeDatabase(request: pb.CloseDatabaseRequest, context: CallContext): Promise<Empty> {
    const res = Empty.create()
    return Promise.resolve(res)
  }
  async openDatabase(request: pb.OpenDatabaseRequest, context: CallContext): Promise<pb.OpenDatabaseResponse> {
    const result = pb.OpenDatabaseResponse.create()
    let db: Databases
    if (request.dbAddress) {
      db = await this.orbit.open(request.dbAddress)
      // if the addresses match, then the database already exists and was opened correctly
      const wasValidAddress = db.address == request.dbAddress
      const result = pb.OpenDatabaseResponse.create()
      result.dbAddress = db.address
      result.isNew = !wasValidAddress
      return result
    }
    let dbtype: Databases | undefined = undefined
    switch (request.type) {
      case pb.DatabaseTypes.DATABASE_TYPES_DOCUMENT:
        dbtype = Documents<Record<string, unknown>>()
        break
      case pb.DatabaseTypes.DATABASE_TYPES_KEYVALUE:
        dbtype = KeyValue<string, unknown>()
        break
      case pb.DatabaseTypes.DATABASE_TYPES_EVENT:
        dbtype = Events<unknown>()
        break
      default:
        throw new ServerError(Status.INVALID_ARGUMENT, `Unrecognized database type ${request.type}`)
    }
    // the only way to know if the database was created or opened is to compare the
    // number of databases before and after opening a database
    const openedDBsBeforeOpen = Object.keys(this.orbit.databases).length
    db = await this.orbit.open(request.name, { Database: dbtype })
    result.dbAddress = db.address
    const openedDBsAfterOpen = Object.keys(this.orbit.databases).length
    result.isNew = openedDBsAfterOpen > openedDBsBeforeOpen
    return result
  }

}

const server = createServer()
server.add(pb.OrbitDBDefinition, await OrbitServer.create(server))
console.log("OrbitDB server listening on 0.0.0.0:4343")
await server.listen("0.0.0.0:4343")

// const server = await OrbitServer.create()
// const db = await server.orbit.open("test", { Database: Events<string>() })
// console.log(`Created database ${db.address}`)