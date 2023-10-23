import { Empty } from "@bufbuild/protobuf"
import { ServiceImpl } from "@connectrpc/connect"
import { OrbitDB, createOrbitDB } from "@orbitdb/core"
import { OrbitDBService } from "@proto/orbitdb_connect"
import { AvailableDatabasesResponse, OpenDatabaseRequest, OpenDatabaseResponse } from "@proto/orbitdb_pb"
import { IPFS, create as createIPFS } from "ipfs-core"

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

  openDatabase = (_req: OpenDatabaseRequest) => {
    return new OpenDatabaseResponse(
      {
        dbAddress: "orbitdb://<orbitdb-address>",
        isNew: false,
      }
    )
  }

  stopService = (_req: Empty) => { 
    return new Empty()
  }

  availableDatabases = (_req: Empty) => { 
    return new AvailableDatabasesResponse(
      {
        databases: [

        ]
      }
    )
  }

  closeDatabase = (_req: Empty) => {
    return new Empty()
  }
}