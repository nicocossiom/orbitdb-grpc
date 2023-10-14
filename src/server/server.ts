import createOrbitDB, { Databases } from "@orbitdb/core"
import { CloseDatabaseRequest, CloseDatabaseResponse, CreateDatabaseRequest, CreateDatabaseResponse, OpenDatabaseRequest, OpenDatabaseResponse, OrbitDBDefinition, OrbitDBServiceImplementation } from "@proto/orbitdb"
import { create as createIPFS } from "ipfs-core"
import { createServer } from "nice-grpc"
import { CallContext } from "nice-grpc-common"

const ipfs = await createIPFS()
const orbit = await createOrbitDB({ ipfs })
const db = await orbit.open<"document", string, number>("my-db", { Database: Databases.Documents()})
class OrbitServer implements OrbitDBServiceImplementation {

  createDatabase(request: CreateDatabaseRequest, context: CallContext): Promise<CreateDatabaseResponse> {
    console.log("createDatabase called")
    console.log(`request: ${JSON.stringify(request)}`)
    console.log(`ctx: ${JSON.stringify(context)}`)
    return new Promise<CreateDatabaseResponse>((resolve) => {
      console.log("createDatabase called")
      resolve({placeholder: "holaholacaracola"})
    })
  }
  openDatabase(request: OpenDatabaseRequest, context: CallContext): Promise<OpenDatabaseResponse> {
    console.log("createDatabase called")
    console.log(`request: ${JSON.stringify(request)}`)
    console.log(`ctx: ${JSON.stringify(context)}`)
    return new Promise<OpenDatabaseResponse>((resolve) => {
      console.log("createDatabase called")
      resolve({placeholder: "test"})
    })
  }
  closeDatabase(request: CloseDatabaseRequest, context: CallContext): Promise<CloseDatabaseResponse> {
    console.log("createDatabase called")
    console.log(`request: ${JSON.stringify(request)}`)
    console.log(`ctx: ${JSON.stringify(context)}`)
    return new Promise<CloseDatabaseResponse>((resolve) => {
      console.log("createDatabase called")
      resolve({placeholder: "test"})
    })
  } 

}

const server = createServer()
server.add(OrbitDBDefinition, new OrbitServer())
console.log("OrbitDB server listening on 0.0.0.0:4343")
await server.listen("0.0.0.0:4343")