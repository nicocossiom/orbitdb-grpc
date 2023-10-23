import { connectNodeAdapter } from "@connectrpc/connect-node"
import routes from "@server/connect"
import * as http2 from "http2"

const server = http2.createServer(
  connectNodeAdapter({ routes }) // responds with 404 for other requests
)

server.on("error", (e) => {
  if (e.code === "EADDRINUSE") {
    console.error("Address in use, retrying...")
    setTimeout(() => {
      server.close()
      server.listen(parseInt(process.env.PORT) + 1, process.env.HOST)
    }, 1000)
  }
})

server.listen(4343, "localhost")