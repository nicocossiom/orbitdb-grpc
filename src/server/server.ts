import * as grpc from "@grpc/grpc-js"
import { Databases, Documents, Events, KeyValue, createOrbitDB } from "@orbitdb/core"
import { Empty } from "@proto/google/protobuf/empty"
import {
  AvailableDatabasesResponse,
  CloseDatabaseRequest,
  ControllerTypes,
  DatabaseTypes,
  OpenDatabaseRequest,
  OpenDatabaseResponse,
} from "@proto/orbitdb"
import { IOrbitDB, orbitDBDefinition } from "@proto/orbitdb.grpc-server"
import { listEnumValues } from "@protobuf-ts/runtime"
import { logger } from "@server/logger"
import assert from "assert"
import { create as createIPFS } from "ipfs-core"

const ipfs = await createIPFS()
const orbit = await createOrbitDB({ ipfs: ipfs })
const POSSIBLE_DBTYPES : { [key: string]: number } = {}
for (const elem of listEnumValues(DatabaseTypes)) {
  POSSIBLE_DBTYPES[elem.name] = elem.number
}

const OrbitServer: IOrbitDB = {
  stopService: function (call: grpc.ServerUnaryCall<Empty, Empty>, callback: grpc.sendUnaryData<Empty>): void {
    setTimeout(() => {
      server.tryShutdown(err => {
        if (!err) return
        logger.error("Error shutting down server", err)
        server.forceShutdown()
        process.exit(-1)
      })
      logger.info("Server shut down")
      process.exit(0)
    }, 1000)
    return callback(null, Empty.create())
  },

  availableDatabases: function (
    call: grpc.ServerUnaryCall<Empty, AvailableDatabasesResponse>,
    callback: grpc.sendUnaryData<AvailableDatabasesResponse>,
  ): void {
    const res = AvailableDatabasesResponse.create()
    Object.keys(orbit.databases).forEach((key) => {
      const db = orbit.databases[key]
      assert(db)
      res.databases.push({
        name: db.name,
        address: db.address,
        type: db.type,
        controller: db.access.type == "orbit" ? ControllerTypes.ORBITDB : ControllerTypes.IPFS,
      })
    })
    return callback(null, res)
  },

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  openDatabase: async function (
    call: grpc.ServerUnaryCall<OpenDatabaseRequest, OpenDatabaseResponse>,
    callback: grpc.sendUnaryData<OpenDatabaseResponse>,
  ): Promise<void> {
    const req = call.request
    let db_type: Databases | undefined = undefined
    switch (req.type) {
    case DatabaseTypes.DOCUMENT:
      db_type = Documents<Record<string, unknown>>()
      break
    case DatabaseTypes.KEYVALUE:
      db_type = KeyValue<string, unknown>()
      break
    case DatabaseTypes.EVENT:
      db_type = Events<unknown>()
      break
    default:
      return callback({ code: grpc.status.INVALID_ARGUMENT, message: `Request database type invalid, valid: \n${JSON.stringify(POSSIBLE_DBTYPES)}` })
    }
    const db = await orbit.open(req.dbAddress ? req.dbAddress : req.name, { Database: db_type })
    assert(db)
    const res = OpenDatabaseResponse.create()
    res.dbAddress = db.address
    callback(null, res)
  },

  closeDatabase: function (call: grpc.ServerUnaryCall<CloseDatabaseRequest, Empty>, callback: grpc.sendUnaryData<Empty>): void {
    throw new Error("Function not implemented.")
  },
}

const server = new grpc.Server()
grpc.setLogVerbosity(grpc.logVerbosity.DEBUG)
server.addService(orbitDBDefinition, OrbitServer)
server.bindAsync("0.0.0.0:4343", grpc.ServerCredentials.createInsecure(), (error, port) => {
  if (error) {
    logger.error("Error starting OrbitDB server")
    logger.error(error)
    process.exit(-1)
  }
  logger.info(`OrbitDB server listening on 0.0.0.0:${port}`)
  server.start()
})
