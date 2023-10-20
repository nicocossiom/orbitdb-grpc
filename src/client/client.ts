import { CallOptions, ChannelCredentials, Client, ClientUnaryCall, Metadata, ServiceError } from "@grpc/grpc-js"
import { Empty } from "@proto/google/protobuf/empty"
import { DatabaseTypes, OpenDatabaseRequest } from "@proto/orbitdb"
import { OrbitDBClient } from "@proto/orbitdb.grpc-client"


type OriginalCall<T, U> = (
  request: T,
  metadata: Metadata,
  options: Partial<CallOptions>,
  callback: (err: ServiceError | null, res?: U) => void,
) => ClientUnaryCall

type PromisifiedCall<T, U> = (
  request: T,
  metadata?: Metadata,
  options?: Partial<CallOptions>,
) => Promise<U>

export type PromisifiedClient<C> = { $: C } & {
  [prop in Exclude<keyof C, keyof Client>]: C[prop] extends OriginalCall<infer T, infer U>
    ? PromisifiedCall<T, U>
    : never
}
/**
 * Promisifies a grpc-js client in order to use async/await

 * {@link https://github.com/timostamm/protobuf-ts/discussions/345#discussioncomment-3106495 See source}
 * @param client 
 * @returns the promisified client
 */
export function promisifyClient<C extends Client>(client: C) {
  return new Proxy(client, {
    get: (target, descriptor) => {
      const key = descriptor as keyof PromisifiedClient<C>

      if (key === "$") return target

      const func = target[key]
      if (typeof func === "function")
        return (...args: unknown[]) =>
          new Promise((resolve, reject) =>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            Reflect.apply(func, target, [
              ...args,
              (err: unknown, res: unknown) => (err ? reject(err) : resolve(res)),
            ]),
          )
      return undefined
    },
  }) as unknown as PromisifiedClient<C>
}

async function main() {
  const client = new OrbitDBClient("0.0.0.0:4343", ChannelCredentials.createInsecure())
  const pclient = promisifyClient(client)
  console.log("Client created, connecting to server...")
  await new Promise<void>(
    (resolve) => {
      client.waitForReady(Date.now() + 5000,
        (err) => {
          if (!err) return resolve()
          console.error("Error connecting to server")
          console.error(err)
          process.exit(-1)
        }
      )
    })
  
  console.log(`Connected to server: ${client.getChannel().getTarget()}`)
  
  const res = await pclient.openDatabase(OpenDatabaseRequest.create({ name: "prueba", type: DatabaseTypes.KEYVALUE, }))
  console.log(res)
  await pclient.stopService(Empty.create())
  
}

await main()