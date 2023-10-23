import { ConnectRouter } from "@connectrpc/connect"
import { OrbitDBService } from "@proto/orbitdbrpc/v1/orbitdb_connect"
import OrbitDBServiceImplementation from "@server/service"

// eslint-disable-next-line @typescript-eslint/await-thenable
const service = await new OrbitDBServiceImplementation()

export default (router: ConnectRouter) => {
  router.service(OrbitDBService, service)
}