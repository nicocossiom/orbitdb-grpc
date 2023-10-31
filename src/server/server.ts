import { connectNodeAdapter } from "@connectrpc/connect-node"
import routes from "@server/connect"
import { logger } from "@server/logger"
import * as http2 from "http2"

const serverLogger = logger.child({ name: "server" })

const server = http2.createServer(
  connectNodeAdapter({ routes }) // responds with 404 for other requests
)

server.on("sessionError", (err) => {
  serverLogger.error(err)
})

server.on("session", (session) => {
  const sessionId = "client-" + session.socket.remoteAddress + ":" + session.socket.remotePort
  const sessionLogger = logger.child({ name:  sessionId })
  sessionLogger.info("Session established with client")
  session.on("close", () => {
    sessionLogger.info("Session closed")
  })
})

// server.on("stream", (stream, headers) => {
//   stream.
// })

server.on("listening", () => serverLogger.info(`Server listening on http://${process.env.HOST}:${process.env.PORT || 4343}`))

server.listen(parseInt(process.env.PORT) || 4343, process.env.HOST)