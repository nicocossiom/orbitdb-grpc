// @generated by protobuf-ts 2.9.1 with parameter generate_dependencies,server_grpc1,client_grpc1
// @generated from protobuf file "orbitdb.proto" (package "orbitdb", syntax proto3)
// tslint:disable
import { Empty } from "./google/protobuf/empty";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "./google/protobuf/any";
/**
 * @generated from protobuf message orbitdb.Database
 */
export interface Database {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string address = 2;
     */
    address: string;
    /**
     * @generated from protobuf field: string type = 3;
     */
    type: string;
    /**
     * @generated from protobuf field: orbitdb.ControllerTypes controller = 4;
     */
    controller: ControllerTypes;
}
/**
 * @generated from protobuf message orbitdb.OpenDatabaseRequest
 */
export interface OpenDatabaseRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: optional string db_address = 2;
     */
    dbAddress?: string;
    /**
     * @generated from protobuf field: orbitdb.DatabaseTypes type = 3;
     */
    type: DatabaseTypes;
    /**
     * @generated from protobuf field: optional orbitdb.OpenDatabaseRequest.Options options = 4;
     */
    options?: OpenDatabaseRequest_Options;
}
/**
 * @generated from protobuf message orbitdb.OpenDatabaseRequest.Options
 */
export interface OpenDatabaseRequest_Options {
    /**
     * @generated from protobuf field: optional string ipfs_api_address = 1;
     */
    ipfsApiAddress?: string;
    /**
     * @generated from protobuf field: optional string meta = 2;
     */
    meta?: string;
    /**
     * @generated from protobuf field: optional bool sync = 3;
     */
    sync?: boolean;
    /**
     * @generated from protobuf field: optional orbitdb.ControllerTypes controller = 4;
     */
    controller?: ControllerTypes;
    /**
     * @generated from protobuf field: optional google.protobuf.Any database_structure = 5;
     */
    databaseStructure?: Any; // TODO see if more options can be somehow added here see
    // https://api.orbitdb.org/module-OrbitDB-OrbitDB.html
}
/**
 * @generated from protobuf message orbitdb.OpenDatabaseResponse
 */
export interface OpenDatabaseResponse {
    /**
     * @generated from protobuf field: string db_address = 1;
     */
    dbAddress: string;
    /**
     * @generated from protobuf field: bool is_new = 2;
     */
    isNew: boolean;
}
/**
 * @generated from protobuf message orbitdb.CloseDatabaseRequest
 */
export interface CloseDatabaseRequest {
    /**
     * @generated from protobuf field: string db_address = 1;
     */
    dbAddress: string;
}
/**
 * @generated from protobuf message orbitdb.AvailableDatabasesResponse
 */
export interface AvailableDatabasesResponse {
    /**
     * @generated from protobuf field: repeated orbitdb.Database databases = 1;
     */
    databases: Database[];
}
// Define the messages for the OrbitDB service

/**
 * @generated from protobuf enum orbitdb.DatabaseTypes
 */
export enum DatabaseTypes {
    /**
     * @generated from protobuf enum value: DATABASE_TYPES_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: DATABASE_TYPES_DOCUMENT = 1;
     */
    DOCUMENT = 1,
    /**
     * @generated from protobuf enum value: DATABASE_TYPES_KEYVALUE = 2;
     */
    KEYVALUE = 2,
    /**
     * @generated from protobuf enum value: DATABASE_TYPES_EVENT = 3;
     */
    EVENT = 3,
    /**
     * @generated from protobuf enum value: DATABASE_TYPES_INDEXED_KEY_VALUE = 4;
     */
    INDEXED_KEY_VALUE = 4
}
/**
 * @generated from protobuf enum orbitdb.ControllerTypes
 */
export enum ControllerTypes {
    /**
     * @generated from protobuf enum value: CONTROLLER_TYPES_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: CONTROLLER_TYPES_IPFS = 1;
     */
    IPFS = 1,
    /**
     * @generated from protobuf enum value: CONTROLLER_TYPES_ORBITDB = 2;
     */
    ORBITDB = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class Database$Type extends MessageType<Database> {
    constructor() {
        super("orbitdb.Database", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "controller", kind: "enum", T: () => ["orbitdb.ControllerTypes", ControllerTypes, "CONTROLLER_TYPES_"] }
        ]);
    }
    create(value?: PartialMessage<Database>): Database {
        const message = { name: "", address: "", type: "", controller: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Database>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Database): Database {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string address */ 2:
                    message.address = reader.string();
                    break;
                case /* string type */ 3:
                    message.type = reader.string();
                    break;
                case /* orbitdb.ControllerTypes controller */ 4:
                    message.controller = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Database, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string address = 2; */
        if (message.address !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.address);
        /* string type = 3; */
        if (message.type !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.type);
        /* orbitdb.ControllerTypes controller = 4; */
        if (message.controller !== 0)
            writer.tag(4, WireType.Varint).int32(message.controller);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message orbitdb.Database
 */
export const Database = new Database$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OpenDatabaseRequest$Type extends MessageType<OpenDatabaseRequest> {
    constructor() {
        super("orbitdb.OpenDatabaseRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "db_address", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "type", kind: "enum", T: () => ["orbitdb.DatabaseTypes", DatabaseTypes, "DATABASE_TYPES_"] },
            { no: 4, name: "options", kind: "message", T: () => OpenDatabaseRequest_Options }
        ]);
    }
    create(value?: PartialMessage<OpenDatabaseRequest>): OpenDatabaseRequest {
        const message = { name: "", type: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OpenDatabaseRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OpenDatabaseRequest): OpenDatabaseRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* optional string db_address */ 2:
                    message.dbAddress = reader.string();
                    break;
                case /* orbitdb.DatabaseTypes type */ 3:
                    message.type = reader.int32();
                    break;
                case /* optional orbitdb.OpenDatabaseRequest.Options options */ 4:
                    message.options = OpenDatabaseRequest_Options.internalBinaryRead(reader, reader.uint32(), options, message.options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: OpenDatabaseRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* optional string db_address = 2; */
        if (message.dbAddress !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.dbAddress);
        /* orbitdb.DatabaseTypes type = 3; */
        if (message.type !== 0)
            writer.tag(3, WireType.Varint).int32(message.type);
        /* optional orbitdb.OpenDatabaseRequest.Options options = 4; */
        if (message.options)
            OpenDatabaseRequest_Options.internalBinaryWrite(message.options, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message orbitdb.OpenDatabaseRequest
 */
export const OpenDatabaseRequest = new OpenDatabaseRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OpenDatabaseRequest_Options$Type extends MessageType<OpenDatabaseRequest_Options> {
    constructor() {
        super("orbitdb.OpenDatabaseRequest.Options", [
            { no: 1, name: "ipfs_api_address", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "meta", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "sync", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "controller", kind: "enum", opt: true, T: () => ["orbitdb.ControllerTypes", ControllerTypes, "CONTROLLER_TYPES_"] },
            { no: 5, name: "database_structure", kind: "message", T: () => Any }
        ]);
    }
    create(value?: PartialMessage<OpenDatabaseRequest_Options>): OpenDatabaseRequest_Options {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OpenDatabaseRequest_Options>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OpenDatabaseRequest_Options): OpenDatabaseRequest_Options {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string ipfs_api_address */ 1:
                    message.ipfsApiAddress = reader.string();
                    break;
                case /* optional string meta */ 2:
                    message.meta = reader.string();
                    break;
                case /* optional bool sync */ 3:
                    message.sync = reader.bool();
                    break;
                case /* optional orbitdb.ControllerTypes controller */ 4:
                    message.controller = reader.int32();
                    break;
                case /* optional google.protobuf.Any database_structure */ 5:
                    message.databaseStructure = Any.internalBinaryRead(reader, reader.uint32(), options, message.databaseStructure);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: OpenDatabaseRequest_Options, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string ipfs_api_address = 1; */
        if (message.ipfsApiAddress !== undefined)
            writer.tag(1, WireType.LengthDelimited).string(message.ipfsApiAddress);
        /* optional string meta = 2; */
        if (message.meta !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.meta);
        /* optional bool sync = 3; */
        if (message.sync !== undefined)
            writer.tag(3, WireType.Varint).bool(message.sync);
        /* optional orbitdb.ControllerTypes controller = 4; */
        if (message.controller !== undefined)
            writer.tag(4, WireType.Varint).int32(message.controller);
        /* optional google.protobuf.Any database_structure = 5; */
        if (message.databaseStructure)
            Any.internalBinaryWrite(message.databaseStructure, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message orbitdb.OpenDatabaseRequest.Options
 */
export const OpenDatabaseRequest_Options = new OpenDatabaseRequest_Options$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OpenDatabaseResponse$Type extends MessageType<OpenDatabaseResponse> {
    constructor() {
        super("orbitdb.OpenDatabaseResponse", [
            { no: 1, name: "db_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "is_new", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<OpenDatabaseResponse>): OpenDatabaseResponse {
        const message = { dbAddress: "", isNew: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OpenDatabaseResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OpenDatabaseResponse): OpenDatabaseResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string db_address */ 1:
                    message.dbAddress = reader.string();
                    break;
                case /* bool is_new */ 2:
                    message.isNew = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: OpenDatabaseResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string db_address = 1; */
        if (message.dbAddress !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.dbAddress);
        /* bool is_new = 2; */
        if (message.isNew !== false)
            writer.tag(2, WireType.Varint).bool(message.isNew);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message orbitdb.OpenDatabaseResponse
 */
export const OpenDatabaseResponse = new OpenDatabaseResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CloseDatabaseRequest$Type extends MessageType<CloseDatabaseRequest> {
    constructor() {
        super("orbitdb.CloseDatabaseRequest", [
            { no: 1, name: "db_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CloseDatabaseRequest>): CloseDatabaseRequest {
        const message = { dbAddress: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CloseDatabaseRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CloseDatabaseRequest): CloseDatabaseRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string db_address */ 1:
                    message.dbAddress = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CloseDatabaseRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string db_address = 1; */
        if (message.dbAddress !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.dbAddress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message orbitdb.CloseDatabaseRequest
 */
export const CloseDatabaseRequest = new CloseDatabaseRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvailableDatabasesResponse$Type extends MessageType<AvailableDatabasesResponse> {
    constructor() {
        super("orbitdb.AvailableDatabasesResponse", [
            { no: 1, name: "databases", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Database }
        ]);
    }
    create(value?: PartialMessage<AvailableDatabasesResponse>): AvailableDatabasesResponse {
        const message = { databases: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AvailableDatabasesResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AvailableDatabasesResponse): AvailableDatabasesResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated orbitdb.Database databases */ 1:
                    message.databases.push(Database.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: AvailableDatabasesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated orbitdb.Database databases = 1; */
        for (let i = 0; i < message.databases.length; i++)
            Database.internalBinaryWrite(message.databases[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message orbitdb.AvailableDatabasesResponse
 */
export const AvailableDatabasesResponse = new AvailableDatabasesResponse$Type();
/**
 * @generated ServiceType for protobuf service orbitdb.OrbitDB
 */
export const OrbitDB = new ServiceType("orbitdb.OrbitDB", [
    { name: "StopService", options: {}, I: Empty, O: Empty },
    { name: "AvailableDatabases", options: {}, I: Empty, O: AvailableDatabasesResponse },
    { name: "OpenDatabase", options: {}, I: OpenDatabaseRequest, O: OpenDatabaseResponse },
    { name: "CloseDatabase", options: {}, I: CloseDatabaseRequest, O: Empty }
]);
