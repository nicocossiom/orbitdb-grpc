#! /bin/bash
ORBIT_DIR="node_modules/@orbitdb/core"
cp tools/orbitdb/tsconfig.json "${ORBIT_DIR}"
rm "${ORBIT_DIR}/package.json"
cp tools/orbitdb/package.json "${ORBIT_DIR}"
cd "${ORBIT_DIR}" || exit
npm install
npm install typescript --save-dev
npm run build:types
