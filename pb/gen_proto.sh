#!/usr/bin/env bash
# Root directory of app
ROOT_DIR=$(git rev-parse --show-toplevel)
# Path to Protoc Plugin
# PROTOC_GEN_TS_PATH="${ROOT_DIR}/node_modules/.bin/protoc-gen-ts_proto"
PROTOC_GEN_TS_PATH="${ROOT_DIR}/node_modules/.bin/protoc-gen-ts"
# Directory holding all .proto files
SRC_DIR="${ROOT_DIR}/pb"
# Directory to write generated code (.d.ts files)
OUT_DIR="${ROOT_DIR}/src/pb"
# check if outdir exists, if not create it else remove all files in it
if [ ! -d "${OUT_DIR}" ]; then
    mkdir "${OUT_DIR}"
else
    rm "${OUT_DIR}"/*
fi

# Clean all existing generated files
rm -r "${OUT_DIR}" 2>/dev/null
mkdir "${OUT_DIR}"
#--ts_proto_opt=useOptionals=all \
# Generate all messages
# protoc \
#     --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PATH}" \
#     --ts_proto_opt=importSuffix=.js \
#     --ts_proto_opt=removeEnumPrefix=true \
#     --ts_proto_opt=esModuleInterop=true \
#     --ts_proto_opt=addGrpcMetadata=true \
#     --ts_proto_out="${OUT_DIR}" \
#     --ts_proto_opt=outputServices=nice-grpc \
#     --ts_proto_opt=outputServices=generic-definitions \
#     --ts_proto_opt=useExactTypes=false \
#     --ts_proto_opt=useSnakeTypeName=false \
#     --proto_path="${SRC_DIR}" \
#     "$(find "${SRC_DIR}" -iname "*.proto")"

pnpx protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --ts_opt generate_dependencies \
    --ts_out "$OUT_DIR" \
    --proto_path="${SRC_DIR}" \
    "$(find "${SRC_DIR}" -iname "*.proto")"

if [ $? -eq 0 ]; then
    echo "Successfully generated protobuf files to ${OUT_DIR}"
    exit 0
else
    echo "Failed to generate protobuf files"
    exit 1
fi
