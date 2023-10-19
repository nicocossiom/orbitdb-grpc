/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import { Any } from "./google/protobuf/any.js";
import { Empty } from "./google/protobuf/empty.js";

export const protobufPackage = "orbitdb";

export enum DatabaseTypes {
  DATABASE_TYPES_UNSPECIFIED = 0,
  DATABASE_TYPES_DOCUMENT = 1,
  DATABASE_TYPES_KEYVALUE = 2,
  DATABASE_TYPES_EVENT = 3,
  DATABASE_TYPES_INDEXED_KEY_VALUE = 4,
  UNRECOGNIZED = -1,
}

export function databaseTypesFromJSON(object: any): DatabaseTypes {
  switch (object) {
    case 0:
    case "DATABASE_TYPES_UNSPECIFIED":
      return DatabaseTypes.DATABASE_TYPES_UNSPECIFIED;
    case 1:
    case "DATABASE_TYPES_DOCUMENT":
      return DatabaseTypes.DATABASE_TYPES_DOCUMENT;
    case 2:
    case "DATABASE_TYPES_KEYVALUE":
      return DatabaseTypes.DATABASE_TYPES_KEYVALUE;
    case 3:
    case "DATABASE_TYPES_EVENT":
      return DatabaseTypes.DATABASE_TYPES_EVENT;
    case 4:
    case "DATABASE_TYPES_INDEXED_KEY_VALUE":
      return DatabaseTypes.DATABASE_TYPES_INDEXED_KEY_VALUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DatabaseTypes.UNRECOGNIZED;
  }
}

export function databaseTypesToJSON(object: DatabaseTypes): string {
  switch (object) {
    case DatabaseTypes.DATABASE_TYPES_UNSPECIFIED:
      return "DATABASE_TYPES_UNSPECIFIED";
    case DatabaseTypes.DATABASE_TYPES_DOCUMENT:
      return "DATABASE_TYPES_DOCUMENT";
    case DatabaseTypes.DATABASE_TYPES_KEYVALUE:
      return "DATABASE_TYPES_KEYVALUE";
    case DatabaseTypes.DATABASE_TYPES_EVENT:
      return "DATABASE_TYPES_EVENT";
    case DatabaseTypes.DATABASE_TYPES_INDEXED_KEY_VALUE:
      return "DATABASE_TYPES_INDEXED_KEY_VALUE";
    case DatabaseTypes.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ControllerTypes {
  CONTROLLER_TYPES_UNSPECIFIED = 0,
  CONTROLLER_TYPES_IPFS = 1,
  CONTROLLER_TYPES_ORBITDB = 2,
  UNRECOGNIZED = -1,
}

export function controllerTypesFromJSON(object: any): ControllerTypes {
  switch (object) {
    case 0:
    case "CONTROLLER_TYPES_UNSPECIFIED":
      return ControllerTypes.CONTROLLER_TYPES_UNSPECIFIED;
    case 1:
    case "CONTROLLER_TYPES_IPFS":
      return ControllerTypes.CONTROLLER_TYPES_IPFS;
    case 2:
    case "CONTROLLER_TYPES_ORBITDB":
      return ControllerTypes.CONTROLLER_TYPES_ORBITDB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ControllerTypes.UNRECOGNIZED;
  }
}

export function controllerTypesToJSON(object: ControllerTypes): string {
  switch (object) {
    case ControllerTypes.CONTROLLER_TYPES_UNSPECIFIED:
      return "CONTROLLER_TYPES_UNSPECIFIED";
    case ControllerTypes.CONTROLLER_TYPES_IPFS:
      return "CONTROLLER_TYPES_IPFS";
    case ControllerTypes.CONTROLLER_TYPES_ORBITDB:
      return "CONTROLLER_TYPES_ORBITDB";
    case ControllerTypes.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Database {
  name: string;
  address: string;
  type: DatabaseTypes;
  controller: ControllerTypes;
}

export interface OpenDatabaseRequest {
  name: string;
  dbAddress?: string | undefined;
  type: DatabaseTypes;
  options?: OpenDatabaseRequestOptions | undefined;
}

export interface OpenDatabaseRequestOptions {
  ipfsApiAddress?: string | undefined;
  meta?: string | undefined;
  sync?: boolean | undefined;
  controller?:
    | ControllerTypes
    | undefined;
  /**
   * TODO see if more options can be somehow added here see
   * https://api.orbitdb.org/module-OrbitDB-OrbitDB.html
   */
  databaseStructure?: Any | undefined;
}

export interface OpenDatabaseResponse {
  dbAddress: string;
  isNew: boolean;
}

export interface CloseDatabaseRequest {
  dbAddress: string;
}

export interface AvailableDatabasesResponse {
  databases: Database[];
}

function createBaseDatabase(): Database {
  return { name: "", address: "", type: 0, controller: 0 };
}

export const Database = {
  encode(message: Database, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.controller !== 0) {
      writer.uint32(32).int32(message.controller);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Database {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatabase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.controller = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Database {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      type: isSet(object.type) ? databaseTypesFromJSON(object.type) : 0,
      controller: isSet(object.controller) ? controllerTypesFromJSON(object.controller) : 0,
    };
  },

  toJSON(message: Database): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.type !== 0) {
      obj.type = databaseTypesToJSON(message.type);
    }
    if (message.controller !== 0) {
      obj.controller = controllerTypesToJSON(message.controller);
    }
    return obj;
  },

  create(base?: DeepPartial<Database>): Database {
    return Database.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Database>): Database {
    const message = createBaseDatabase();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.type = object.type ?? 0;
    message.controller = object.controller ?? 0;
    return message;
  },
};

function createBaseOpenDatabaseRequest(): OpenDatabaseRequest {
  return { name: "", dbAddress: undefined, type: 0, options: undefined };
}

export const OpenDatabaseRequest = {
  encode(message: OpenDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.dbAddress !== undefined) {
      writer.uint32(18).string(message.dbAddress);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.options !== undefined) {
      OpenDatabaseRequestOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenDatabaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenDatabaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dbAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.options = OpenDatabaseRequestOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenDatabaseRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      dbAddress: isSet(object.dbAddress) ? globalThis.String(object.dbAddress) : undefined,
      type: isSet(object.type) ? databaseTypesFromJSON(object.type) : 0,
      options: isSet(object.options) ? OpenDatabaseRequestOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: OpenDatabaseRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.dbAddress !== undefined) {
      obj.dbAddress = message.dbAddress;
    }
    if (message.type !== 0) {
      obj.type = databaseTypesToJSON(message.type);
    }
    if (message.options !== undefined) {
      obj.options = OpenDatabaseRequestOptions.toJSON(message.options);
    }
    return obj;
  },

  create(base?: DeepPartial<OpenDatabaseRequest>): OpenDatabaseRequest {
    return OpenDatabaseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenDatabaseRequest>): OpenDatabaseRequest {
    const message = createBaseOpenDatabaseRequest();
    message.name = object.name ?? "";
    message.dbAddress = object.dbAddress ?? undefined;
    message.type = object.type ?? 0;
    message.options = (object.options !== undefined && object.options !== null)
      ? OpenDatabaseRequestOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseOpenDatabaseRequestOptions(): OpenDatabaseRequestOptions {
  return {
    ipfsApiAddress: undefined,
    meta: undefined,
    sync: undefined,
    controller: undefined,
    databaseStructure: undefined,
  };
}

export const OpenDatabaseRequestOptions = {
  encode(message: OpenDatabaseRequestOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ipfsApiAddress !== undefined) {
      writer.uint32(10).string(message.ipfsApiAddress);
    }
    if (message.meta !== undefined) {
      writer.uint32(18).string(message.meta);
    }
    if (message.sync !== undefined) {
      writer.uint32(24).bool(message.sync);
    }
    if (message.controller !== undefined) {
      writer.uint32(32).int32(message.controller);
    }
    if (message.databaseStructure !== undefined) {
      Any.encode(message.databaseStructure, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenDatabaseRequestOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenDatabaseRequestOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ipfsApiAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.meta = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sync = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.controller = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.databaseStructure = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenDatabaseRequestOptions {
    return {
      ipfsApiAddress: isSet(object.ipfsApiAddress) ? globalThis.String(object.ipfsApiAddress) : undefined,
      meta: isSet(object.meta) ? globalThis.String(object.meta) : undefined,
      sync: isSet(object.sync) ? globalThis.Boolean(object.sync) : undefined,
      controller: isSet(object.controller) ? controllerTypesFromJSON(object.controller) : undefined,
      databaseStructure: isSet(object.databaseStructure) ? Any.fromJSON(object.databaseStructure) : undefined,
    };
  },

  toJSON(message: OpenDatabaseRequestOptions): unknown {
    const obj: any = {};
    if (message.ipfsApiAddress !== undefined) {
      obj.ipfsApiAddress = message.ipfsApiAddress;
    }
    if (message.meta !== undefined) {
      obj.meta = message.meta;
    }
    if (message.sync !== undefined) {
      obj.sync = message.sync;
    }
    if (message.controller !== undefined) {
      obj.controller = controllerTypesToJSON(message.controller);
    }
    if (message.databaseStructure !== undefined) {
      obj.databaseStructure = Any.toJSON(message.databaseStructure);
    }
    return obj;
  },

  create(base?: DeepPartial<OpenDatabaseRequestOptions>): OpenDatabaseRequestOptions {
    return OpenDatabaseRequestOptions.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenDatabaseRequestOptions>): OpenDatabaseRequestOptions {
    const message = createBaseOpenDatabaseRequestOptions();
    message.ipfsApiAddress = object.ipfsApiAddress ?? undefined;
    message.meta = object.meta ?? undefined;
    message.sync = object.sync ?? undefined;
    message.controller = object.controller ?? undefined;
    message.databaseStructure = (object.databaseStructure !== undefined && object.databaseStructure !== null)
      ? Any.fromPartial(object.databaseStructure)
      : undefined;
    return message;
  },
};

function createBaseOpenDatabaseResponse(): OpenDatabaseResponse {
  return { dbAddress: "", isNew: false };
}

export const OpenDatabaseResponse = {
  encode(message: OpenDatabaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dbAddress !== "") {
      writer.uint32(10).string(message.dbAddress);
    }
    if (message.isNew === true) {
      writer.uint32(16).bool(message.isNew);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenDatabaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenDatabaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dbAddress = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isNew = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenDatabaseResponse {
    return {
      dbAddress: isSet(object.dbAddress) ? globalThis.String(object.dbAddress) : "",
      isNew: isSet(object.isNew) ? globalThis.Boolean(object.isNew) : false,
    };
  },

  toJSON(message: OpenDatabaseResponse): unknown {
    const obj: any = {};
    if (message.dbAddress !== "") {
      obj.dbAddress = message.dbAddress;
    }
    if (message.isNew === true) {
      obj.isNew = message.isNew;
    }
    return obj;
  },

  create(base?: DeepPartial<OpenDatabaseResponse>): OpenDatabaseResponse {
    return OpenDatabaseResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenDatabaseResponse>): OpenDatabaseResponse {
    const message = createBaseOpenDatabaseResponse();
    message.dbAddress = object.dbAddress ?? "";
    message.isNew = object.isNew ?? false;
    return message;
  },
};

function createBaseCloseDatabaseRequest(): CloseDatabaseRequest {
  return { dbAddress: "" };
}

export const CloseDatabaseRequest = {
  encode(message: CloseDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dbAddress !== "") {
      writer.uint32(10).string(message.dbAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloseDatabaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloseDatabaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dbAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CloseDatabaseRequest {
    return { dbAddress: isSet(object.dbAddress) ? globalThis.String(object.dbAddress) : "" };
  },

  toJSON(message: CloseDatabaseRequest): unknown {
    const obj: any = {};
    if (message.dbAddress !== "") {
      obj.dbAddress = message.dbAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<CloseDatabaseRequest>): CloseDatabaseRequest {
    return CloseDatabaseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CloseDatabaseRequest>): CloseDatabaseRequest {
    const message = createBaseCloseDatabaseRequest();
    message.dbAddress = object.dbAddress ?? "";
    return message;
  },
};

function createBaseAvailableDatabasesResponse(): AvailableDatabasesResponse {
  return { databases: [] };
}

export const AvailableDatabasesResponse = {
  encode(message: AvailableDatabasesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.databases) {
      Database.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AvailableDatabasesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAvailableDatabasesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databases.push(Database.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AvailableDatabasesResponse {
    return {
      databases: globalThis.Array.isArray(object?.databases)
        ? object.databases.map((e: any) => Database.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AvailableDatabasesResponse): unknown {
    const obj: any = {};
    if (message.databases?.length) {
      obj.databases = message.databases.map((e) => Database.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<AvailableDatabasesResponse>): AvailableDatabasesResponse {
    return AvailableDatabasesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AvailableDatabasesResponse>): AvailableDatabasesResponse {
    const message = createBaseAvailableDatabasesResponse();
    message.databases = object.databases?.map((e) => Database.fromPartial(e)) || [];
    return message;
  },
};

/** Define the OrbitDB service */
export type OrbitDBDefinition = typeof OrbitDBDefinition;
export const OrbitDBDefinition = {
  name: "OrbitDB",
  fullName: "orbitdb.OrbitDB",
  methods: {
    /** Define the RPC methods for the OrbitDB service */
    stopService: {
      name: "StopService",
      requestType: Empty,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    availableDatabases: {
      name: "AvailableDatabases",
      requestType: Empty,
      requestStream: false,
      responseType: AvailableDatabasesResponse,
      responseStream: false,
      options: {},
    },
    openDatabase: {
      name: "OpenDatabase",
      requestType: OpenDatabaseRequest,
      requestStream: false,
      responseType: OpenDatabaseResponse,
      responseStream: false,
      options: {},
    },
    closeDatabase: {
      name: "CloseDatabase",
      requestType: CloseDatabaseRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface OrbitDBServiceImplementation<CallContextExt = {}> {
  /** Define the RPC methods for the OrbitDB service */
  stopService(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  availableDatabases(
    request: Empty,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AvailableDatabasesResponse>>;
  openDatabase(
    request: OpenDatabaseRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OpenDatabaseResponse>>;
  closeDatabase(request: CloseDatabaseRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
}

export interface OrbitDBClient<CallOptionsExt = {}> {
  /** Define the RPC methods for the OrbitDB service */
  stopService(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  availableDatabases(
    request: DeepPartial<Empty>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AvailableDatabasesResponse>;
  openDatabase(
    request: DeepPartial<OpenDatabaseRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OpenDatabaseResponse>;
  closeDatabase(request: DeepPartial<CloseDatabaseRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
