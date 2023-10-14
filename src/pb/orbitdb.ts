/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "orbitdb";

export interface CreateDatabaseRequest {
  name?: string | undefined;
  type?: string | undefined;
  options?: string | undefined;
}

export interface CreateDatabaseResponse {
  placeholder?: string | undefined;
}

export interface OpenDatabaseRequest {
  placeholder?: string | undefined;
}

export interface OpenDatabaseResponse {
  placeholder?: string | undefined;
}

export interface CloseDatabaseRequest {
  placeholder?: string | undefined;
}

export interface CloseDatabaseResponse {
  placeholder?: string | undefined;
}

function createBaseCreateDatabaseRequest(): CreateDatabaseRequest {
  return { name: "", type: "", options: "" };
}

export const CreateDatabaseRequest = {
  encode(message: CreateDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== undefined && message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.options !== undefined && message.options !== "") {
      writer.uint32(26).string(message.options);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDatabaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDatabaseRequest();
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

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDatabaseRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      options: isSet(object.options) ? globalThis.String(object.options) : "",
    };
  },

  toJSON(message: CreateDatabaseRequest): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== undefined && message.type !== "") {
      obj.type = message.type;
    }
    if (message.options !== undefined && message.options !== "") {
      obj.options = message.options;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateDatabaseRequest>): CreateDatabaseRequest {
    return CreateDatabaseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateDatabaseRequest>): CreateDatabaseRequest {
    const message = createBaseCreateDatabaseRequest();
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.options = object.options ?? "";
    return message;
  },
};

function createBaseCreateDatabaseResponse(): CreateDatabaseResponse {
  return { placeholder: "" };
}

export const CreateDatabaseResponse = {
  encode(message: CreateDatabaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placeholder !== undefined && message.placeholder !== "") {
      writer.uint32(10).string(message.placeholder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDatabaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDatabaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placeholder = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDatabaseResponse {
    return { placeholder: isSet(object.placeholder) ? globalThis.String(object.placeholder) : "" };
  },

  toJSON(message: CreateDatabaseResponse): unknown {
    const obj: any = {};
    if (message.placeholder !== undefined && message.placeholder !== "") {
      obj.placeholder = message.placeholder;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateDatabaseResponse>): CreateDatabaseResponse {
    return CreateDatabaseResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateDatabaseResponse>): CreateDatabaseResponse {
    const message = createBaseCreateDatabaseResponse();
    message.placeholder = object.placeholder ?? "";
    return message;
  },
};

function createBaseOpenDatabaseRequest(): OpenDatabaseRequest {
  return { placeholder: "" };
}

export const OpenDatabaseRequest = {
  encode(message: OpenDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placeholder !== undefined && message.placeholder !== "") {
      writer.uint32(10).string(message.placeholder);
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

          message.placeholder = reader.string();
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
    return { placeholder: isSet(object.placeholder) ? globalThis.String(object.placeholder) : "" };
  },

  toJSON(message: OpenDatabaseRequest): unknown {
    const obj: any = {};
    if (message.placeholder !== undefined && message.placeholder !== "") {
      obj.placeholder = message.placeholder;
    }
    return obj;
  },

  create(base?: DeepPartial<OpenDatabaseRequest>): OpenDatabaseRequest {
    return OpenDatabaseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenDatabaseRequest>): OpenDatabaseRequest {
    const message = createBaseOpenDatabaseRequest();
    message.placeholder = object.placeholder ?? "";
    return message;
  },
};

function createBaseOpenDatabaseResponse(): OpenDatabaseResponse {
  return { placeholder: "" };
}

export const OpenDatabaseResponse = {
  encode(message: OpenDatabaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placeholder !== undefined && message.placeholder !== "") {
      writer.uint32(10).string(message.placeholder);
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

          message.placeholder = reader.string();
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
    return { placeholder: isSet(object.placeholder) ? globalThis.String(object.placeholder) : "" };
  },

  toJSON(message: OpenDatabaseResponse): unknown {
    const obj: any = {};
    if (message.placeholder !== undefined && message.placeholder !== "") {
      obj.placeholder = message.placeholder;
    }
    return obj;
  },

  create(base?: DeepPartial<OpenDatabaseResponse>): OpenDatabaseResponse {
    return OpenDatabaseResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenDatabaseResponse>): OpenDatabaseResponse {
    const message = createBaseOpenDatabaseResponse();
    message.placeholder = object.placeholder ?? "";
    return message;
  },
};

function createBaseCloseDatabaseRequest(): CloseDatabaseRequest {
  return { placeholder: "" };
}

export const CloseDatabaseRequest = {
  encode(message: CloseDatabaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placeholder !== undefined && message.placeholder !== "") {
      writer.uint32(10).string(message.placeholder);
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

          message.placeholder = reader.string();
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
    return { placeholder: isSet(object.placeholder) ? globalThis.String(object.placeholder) : "" };
  },

  toJSON(message: CloseDatabaseRequest): unknown {
    const obj: any = {};
    if (message.placeholder !== undefined && message.placeholder !== "") {
      obj.placeholder = message.placeholder;
    }
    return obj;
  },

  create(base?: DeepPartial<CloseDatabaseRequest>): CloseDatabaseRequest {
    return CloseDatabaseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CloseDatabaseRequest>): CloseDatabaseRequest {
    const message = createBaseCloseDatabaseRequest();
    message.placeholder = object.placeholder ?? "";
    return message;
  },
};

function createBaseCloseDatabaseResponse(): CloseDatabaseResponse {
  return { placeholder: "" };
}

export const CloseDatabaseResponse = {
  encode(message: CloseDatabaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placeholder !== undefined && message.placeholder !== "") {
      writer.uint32(10).string(message.placeholder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloseDatabaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloseDatabaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placeholder = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CloseDatabaseResponse {
    return { placeholder: isSet(object.placeholder) ? globalThis.String(object.placeholder) : "" };
  },

  toJSON(message: CloseDatabaseResponse): unknown {
    const obj: any = {};
    if (message.placeholder !== undefined && message.placeholder !== "") {
      obj.placeholder = message.placeholder;
    }
    return obj;
  },

  create(base?: DeepPartial<CloseDatabaseResponse>): CloseDatabaseResponse {
    return CloseDatabaseResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CloseDatabaseResponse>): CloseDatabaseResponse {
    const message = createBaseCloseDatabaseResponse();
    message.placeholder = object.placeholder ?? "";
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
    createDatabase: {
      name: "CreateDatabase",
      requestType: CreateDatabaseRequest,
      requestStream: false,
      responseType: CreateDatabaseResponse,
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
      responseType: CloseDatabaseResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface OrbitDBServiceImplementation<CallContextExt = {}> {
  /** Define the RPC methods for the OrbitDB service */
  createDatabase(
    request: CreateDatabaseRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateDatabaseResponse>>;
  openDatabase(
    request: OpenDatabaseRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OpenDatabaseResponse>>;
  closeDatabase(
    request: CloseDatabaseRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CloseDatabaseResponse>>;
}

export interface OrbitDBClient<CallOptionsExt = {}> {
  /** Define the RPC methods for the OrbitDB service */
  createDatabase(
    request: DeepPartial<CreateDatabaseRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateDatabaseResponse>;
  openDatabase(
    request: DeepPartial<OpenDatabaseRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OpenDatabaseResponse>;
  closeDatabase(
    request: DeepPartial<CloseDatabaseRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CloseDatabaseResponse>;
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
