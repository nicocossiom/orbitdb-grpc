import { OrbitDBClient, OrbitDBDefinition } from "@proto/orbitdb"
import { createChannel, createClient } from "nice-grpc"

const channel = createChannel("localhost:4343")

export const client: OrbitDBClient = createClient(
  OrbitDBDefinition,
  channel,
)

