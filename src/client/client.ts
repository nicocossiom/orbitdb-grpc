import { createPromiseClient } from "@connectrpc/connect"
import { createConnectTransport } from "@connectrpc/connect-node"
import { OrbitDBService } from "@proto/orbitdb_connect"
import { DatabaseTypes } from "@proto/orbitdb_pb"

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
      type: DatabaseTypes.DOCUMENT,
      name: "test"
    }
  )
  console.log(res)
}
await main()