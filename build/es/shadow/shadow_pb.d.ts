//
//Copyright © 2021-2023 Infinite Devices GmbH
//
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
//
//http://www.apache.org/licenses/LICENSE-2.0
//
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file shadow/shadow.proto (package infinimesh.shadow, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Struct, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum infinimesh.shadow.StateKey
 */
export declare enum StateKey {
  /**
   * @generated from enum value: REPORTED = 0;
   */
  REPORTED = 0,

  /**
   * @generated from enum value: DESIRED = 1;
   */
  DESIRED = 1,

  /**
   * @generated from enum value: CONNECTION = 2;
   */
  CONNECTION = 2,
}

/**
 * @generated from message infinimesh.shadow.State
 */
export declare class State extends Message<State> {
  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: google.protobuf.Struct data = 2;
   */
  data?: Struct;

  constructor(data?: PartialMessage<State>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.shadow.State";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): State;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): State;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): State;

  static equals(a: State | PlainMessage<State> | undefined, b: State | PlainMessage<State> | undefined): boolean;
}

/**
 * @generated from message infinimesh.shadow.ConnectionState
 */
export declare class ConnectionState extends Message<ConnectionState> {
  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: bool connected = 2;
   */
  connected: boolean;

  /**
   * MQTT Client ID used for connection
   *
   * @generated from field: string client_id = 3;
   */
  clientId: string;

  constructor(data?: PartialMessage<ConnectionState>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.shadow.ConnectionState";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConnectionState;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConnectionState;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConnectionState;

  static equals(a: ConnectionState | PlainMessage<ConnectionState> | undefined, b: ConnectionState | PlainMessage<ConnectionState> | undefined): boolean;
}

/**
 * @generated from message infinimesh.shadow.Shadow
 */
export declare class Shadow extends Message<Shadow> {
  /**
   * @generated from field: string device = 1;
   */
  device: string;

  /**
   * @generated from field: infinimesh.shadow.State reported = 2;
   */
  reported?: State;

  /**
   * @generated from field: infinimesh.shadow.State desired = 3;
   */
  desired?: State;

  /**
   * @generated from field: infinimesh.shadow.ConnectionState connection = 4;
   */
  connection?: ConnectionState;

  constructor(data?: PartialMessage<Shadow>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.shadow.Shadow";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Shadow;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Shadow;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Shadow;

  static equals(a: Shadow | PlainMessage<Shadow> | undefined, b: Shadow | PlainMessage<Shadow> | undefined): boolean;
}

/**
 * @generated from message infinimesh.shadow.GetRequest
 */
export declare class GetRequest extends Message<GetRequest> {
  /**
   * @generated from field: repeated string pool = 1;
   */
  pool: string[];

  constructor(data?: PartialMessage<GetRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.shadow.GetRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRequest;

  static equals(a: GetRequest | PlainMessage<GetRequest> | undefined, b: GetRequest | PlainMessage<GetRequest> | undefined): boolean;
}

/**
 * @generated from message infinimesh.shadow.GetResponse
 */
export declare class GetResponse extends Message<GetResponse> {
  /**
   * @generated from field: repeated infinimesh.shadow.Shadow shadows = 1;
   */
  shadows: Shadow[];

  constructor(data?: PartialMessage<GetResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.shadow.GetResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetResponse;

  static equals(a: GetResponse | PlainMessage<GetResponse> | undefined, b: GetResponse | PlainMessage<GetResponse> | undefined): boolean;
}

/**
 * @generated from message infinimesh.shadow.RemoveRequest
 */
export declare class RemoveRequest extends Message<RemoveRequest> {
  /**
   * @generated from field: string device = 1;
   */
  device: string;

  /**
   * @generated from field: infinimesh.shadow.StateKey state_key = 2;
   */
  stateKey: StateKey;

  /**
   * @generated from field: string key = 3;
   */
  key: string;

  constructor(data?: PartialMessage<RemoveRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.shadow.RemoveRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveRequest;

  static equals(a: RemoveRequest | PlainMessage<RemoveRequest> | undefined, b: RemoveRequest | PlainMessage<RemoveRequest> | undefined): boolean;
}

/**
 * @generated from message infinimesh.shadow.StreamShadowRequest
 */
export declare class StreamShadowRequest extends Message<StreamShadowRequest> {
  /**
   * @generated from field: repeated string devices = 1;
   */
  devices: string[];

  /**
   * @generated from field: bool only_delta = 2;
   */
  onlyDelta: boolean;

  /**
   * @generated from field: bool sync = 3;
   */
  sync: boolean;

  constructor(data?: PartialMessage<StreamShadowRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.shadow.StreamShadowRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamShadowRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamShadowRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamShadowRequest;

  static equals(a: StreamShadowRequest | PlainMessage<StreamShadowRequest> | undefined, b: StreamShadowRequest | PlainMessage<StreamShadowRequest> | undefined): boolean;
}

