// @generated by protobuf-ts 2.9.1 with parameter generate_dependencies,server_grpc1,client_grpc1
// @generated from protobuf file "orbitdb.proto" (package "orbitdb", syntax proto3)
// tslint:disable
import { CloseDatabaseRequest } from "./orbitdb";
import { OpenDatabaseResponse } from "./orbitdb";
import { OpenDatabaseRequest } from "./orbitdb";
import { AvailableDatabasesResponse } from "./orbitdb";
import { Empty } from "./google/protobuf/empty";
import type * as grpc from "@grpc/grpc-js";
/**
 * Define the OrbitDB service
 *
 * @generated from protobuf service orbitdb.OrbitDB
 */
export interface IOrbitDB extends grpc.UntypedServiceImplementation {
    /**
     * Define the RPC methods for the OrbitDB service
     *
     * @generated from protobuf rpc: StopService(google.protobuf.Empty) returns (google.protobuf.Empty);
     */
    stopService: grpc.handleUnaryCall<Empty, Empty>;
    /**
     * @generated from protobuf rpc: AvailableDatabases(google.protobuf.Empty) returns (orbitdb.AvailableDatabasesResponse);
     */
    availableDatabases: grpc.handleUnaryCall<Empty, AvailableDatabasesResponse>;
    /**
     * @generated from protobuf rpc: OpenDatabase(orbitdb.OpenDatabaseRequest) returns (orbitdb.OpenDatabaseResponse);
     */
    openDatabase: grpc.handleUnaryCall<OpenDatabaseRequest, OpenDatabaseResponse>;
    /**
     * @generated from protobuf rpc: CloseDatabase(orbitdb.CloseDatabaseRequest) returns (google.protobuf.Empty);
     */
    closeDatabase: grpc.handleUnaryCall<CloseDatabaseRequest, Empty>;
}
/**
 * @grpc/grpc-js definition for the protobuf service orbitdb.OrbitDB.
 *
 * Usage: Implement the interface IOrbitDB and add to a grpc server.
 *
 * ```typescript
 * const server = new grpc.Server();
 * const service: IOrbitDB = ...
 * server.addService(orbitDBDefinition, service);
 * ```
 */
export const orbitDBDefinition: grpc.ServiceDefinition<IOrbitDB> = {
    stopService: {
        path: "/orbitdb.OrbitDB/StopService",
        originalName: "StopService",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => Empty.fromBinary(bytes),
        requestDeserialize: bytes => Empty.fromBinary(bytes),
        responseSerialize: value => Buffer.from(Empty.toBinary(value)),
        requestSerialize: value => Buffer.from(Empty.toBinary(value))
    },
    availableDatabases: {
        path: "/orbitdb.OrbitDB/AvailableDatabases",
        originalName: "AvailableDatabases",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => AvailableDatabasesResponse.fromBinary(bytes),
        requestDeserialize: bytes => Empty.fromBinary(bytes),
        responseSerialize: value => Buffer.from(AvailableDatabasesResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(Empty.toBinary(value))
    },
    openDatabase: {
        path: "/orbitdb.OrbitDB/OpenDatabase",
        originalName: "OpenDatabase",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => OpenDatabaseResponse.fromBinary(bytes),
        requestDeserialize: bytes => OpenDatabaseRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(OpenDatabaseResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(OpenDatabaseRequest.toBinary(value))
    },
    closeDatabase: {
        path: "/orbitdb.OrbitDB/CloseDatabase",
        originalName: "CloseDatabase",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => Empty.fromBinary(bytes),
        requestDeserialize: bytes => CloseDatabaseRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(Empty.toBinary(value)),
        requestSerialize: value => Buffer.from(CloseDatabaseRequest.toBinary(value))
    }
};
