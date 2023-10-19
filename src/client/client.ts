import { OrbitDBClient, OrbitDBDefinition } from "@proto/orbitdb"
import { createChannel, createClient } from "nice-grpc"

const channel = createChannel("localhost:4343")

export const client: OrbitDBClient = createClient(
  OrbitDBDefinition,
  channel,
)

await client.openDatabase({
  name: "prueba",
  type: undefined,
}).then(res => {
  console.log(`Created new db ${JSON.stringify(res)}`)
}).catch(err => console.error(err))
console.log("done")
