import { createPromiseClient } from "@connectrpc/connect"
import { createConnectTransport } from "@connectrpc/connect-node"
import { OrbitDBService } from "@proto/orbitdbrpc/v1/orbitdb_connect"
import { DatabaseTypes } from "@proto/orbitdbrpc/v1/orbitdb_pb"

const transport = createConnectTransport(
  {
    httpVersion: "2", 
    baseUrl: "http://localhost:4343",
  }
)

async function main() {
  const client = createPromiseClient(OrbitDBService, transport)
  const res = await client.openDatabase(
    {
      type: DatabaseTypes.KEYVALUE,
      name: "test"
    }
  ).catch(e => console.log(e))
  console.log(res)
  console.log((await client.availableDatabases({})).databases)
}
await main()