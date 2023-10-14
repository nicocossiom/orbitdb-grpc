import { createOrbitDB } from "@orbitdb/core"
import IPFS from "ipfs-core"

export const createOrbit = async () => { 
  const ipfs = await IPFS.create()
  const orbitdb = await createOrbitDB({ ipfs })
  return orbitdb
}

