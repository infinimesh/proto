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

// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file node/node.proto (package infinimesh.node, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Credentials } from "./accounts/accounts_pb.js";
import type { Level } from "./access/access_pb.js";

/**
 * @generated from message infinimesh.node.TokenRequest
 */
export declare class TokenRequest extends Message<TokenRequest> {
  /**
   * @generated from field: infinimesh.node.accounts.Credentials auth = 1;
   */
  auth?: Credentials;

  /**
   * @generated from field: int64 exp = 2;
   */
  exp: bigint;

  /**
   * @generated from field: optional string uuid = 3;
   */
  uuid?: string;

  /**
   * @generated from field: optional bool inf = 4;
   */
  inf?: boolean;

  /**
   * @generated from field: optional string client = 5;
   */
  client?: string;

  constructor(data?: PartialMessage<TokenRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.TokenRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenRequest;

  static equals(a: TokenRequest | PlainMessage<TokenRequest> | undefined, b: TokenRequest | PlainMessage<TokenRequest> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.TokenResponse
 */
export declare class TokenResponse extends Message<TokenResponse> {
  /**
   * @generated from field: string token = 1;
   */
  token: string;

  constructor(data?: PartialMessage<TokenResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.TokenResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenResponse;

  static equals(a: TokenResponse | PlainMessage<TokenResponse> | undefined, b: TokenResponse | PlainMessage<TokenResponse> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.SetCredentialsRequest
 */
export declare class SetCredentialsRequest extends Message<SetCredentialsRequest> {
  /**
   * Affected account
   *
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: infinimesh.node.accounts.Credentials credentials = 2;
   */
  credentials?: Credentials;

  constructor(data?: PartialMessage<SetCredentialsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.SetCredentialsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetCredentialsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetCredentialsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetCredentialsRequest;

  static equals(a: SetCredentialsRequest | PlainMessage<SetCredentialsRequest> | undefined, b: SetCredentialsRequest | PlainMessage<SetCredentialsRequest> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.SetCredentialsResponse
 */
export declare class SetCredentialsResponse extends Message<SetCredentialsResponse> {
  constructor(data?: PartialMessage<SetCredentialsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.SetCredentialsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetCredentialsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetCredentialsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetCredentialsResponse;

  static equals(a: SetCredentialsResponse | PlainMessage<SetCredentialsResponse> | undefined, b: SetCredentialsResponse | PlainMessage<SetCredentialsResponse> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.GetCredentialsRequest
 */
export declare class GetCredentialsRequest extends Message<GetCredentialsRequest> {
  /**
   * Affected account
   *
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<GetCredentialsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.GetCredentialsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCredentialsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCredentialsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCredentialsRequest;

  static equals(a: GetCredentialsRequest | PlainMessage<GetCredentialsRequest> | undefined, b: GetCredentialsRequest | PlainMessage<GetCredentialsRequest> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.GetCredentialsResponse
 */
export declare class GetCredentialsResponse extends Message<GetCredentialsResponse> {
  /**
   * @generated from field: repeated infinimesh.node.accounts.Credentials credentials = 1;
   */
  credentials: Credentials[];

  constructor(data?: PartialMessage<GetCredentialsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.GetCredentialsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCredentialsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCredentialsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCredentialsResponse;

  static equals(a: GetCredentialsResponse | PlainMessage<GetCredentialsResponse> | undefined, b: GetCredentialsResponse | PlainMessage<GetCredentialsResponse> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.DeleteCredentialsRequest
 */
export declare class DeleteCredentialsRequest extends Message<DeleteCredentialsRequest> {
  /**
   * Affected account
   *
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * Credentials Type to Delete
   *
   * @generated from field: string type = 2;
   */
  type: string;

  constructor(data?: PartialMessage<DeleteCredentialsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.DeleteCredentialsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteCredentialsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteCredentialsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteCredentialsRequest;

  static equals(a: DeleteCredentialsRequest | PlainMessage<DeleteCredentialsRequest> | undefined, b: DeleteCredentialsRequest | PlainMessage<DeleteCredentialsRequest> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.DeleteResponse
 */
export declare class DeleteResponse extends Message<DeleteResponse> {
  constructor(data?: PartialMessage<DeleteResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.DeleteResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteResponse;

  static equals(a: DeleteResponse | PlainMessage<DeleteResponse> | undefined, b: DeleteResponse | PlainMessage<DeleteResponse> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.EmptyMessage
 */
export declare class EmptyMessage extends Message<EmptyMessage> {
  constructor(data?: PartialMessage<EmptyMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.EmptyMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmptyMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmptyMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmptyMessage;

  static equals(a: EmptyMessage | PlainMessage<EmptyMessage> | undefined, b: EmptyMessage | PlainMessage<EmptyMessage> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.QueryRequest
 */
export declare class QueryRequest extends Message<QueryRequest> {
  /**
   * @generated from field: optional string namespace = 1;
   */
  namespace?: string;

  /**
   * @generated from field: optional string account = 2;
   */
  account?: string;

  constructor(data?: PartialMessage<QueryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.QueryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRequest;

  static equals(a: QueryRequest | PlainMessage<QueryRequest> | undefined, b: QueryRequest | PlainMessage<QueryRequest> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.MoveRequest
 */
export declare class MoveRequest extends Message<MoveRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string namespace = 2;
   */
  namespace: string;

  constructor(data?: PartialMessage<MoveRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.MoveRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MoveRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MoveRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MoveRequest;

  static equals(a: MoveRequest | PlainMessage<MoveRequest> | undefined, b: MoveRequest | PlainMessage<MoveRequest> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.JoinRequest
 */
export declare class JoinRequest extends Message<JoinRequest> {
  /**
   * @generated from field: string namespace = 1;
   */
  namespace: string;

  /**
   * @generated from field: string account = 2;
   */
  account: string;

  /**
   * @generated from field: infinimesh.node.access.Level access = 3;
   */
  access: Level;

  constructor(data?: PartialMessage<JoinRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.JoinRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JoinRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JoinRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JoinRequest;

  static equals(a: JoinRequest | PlainMessage<JoinRequest> | undefined, b: JoinRequest | PlainMessage<JoinRequest> | undefined): boolean;
}

/**
 * Generally, adds link like | join ---access---> node |
 *
 * @generated from message infinimesh.node.JoinGeneralRequest
 */
export declare class JoinGeneralRequest extends Message<JoinGeneralRequest> {
  /**
   * Node to make Join to (can be interpret differenetly
   *
   * @generated from field: string node = 1;
   */
  node: string;

  /**
   * depending on Controller)
   *
   * Node to make Join from (can be interpret differenetly
   *
   * @generated from field: string join = 2;
   */
  join: string;

  /**
   * depending on Controller)
   *
   * @generated from field: infinimesh.node.access.Level access = 3;
   */
  access: Level;

  constructor(data?: PartialMessage<JoinGeneralRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.JoinGeneralRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JoinGeneralRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JoinGeneralRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JoinGeneralRequest;

  static equals(a: JoinGeneralRequest | PlainMessage<JoinGeneralRequest> | undefined, b: JoinGeneralRequest | PlainMessage<JoinGeneralRequest> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.DevicesTokenRequest
 */
export declare class DevicesTokenRequest extends Message<DevicesTokenRequest> {
  /**
   * @generated from field: repeated string devices = 1;
   */
  devices: string[];

  /**
   * @generated from field: int64 exp = 2;
   */
  exp: bigint;

  /**
   * @generated from field: bool post = 3;
   */
  post: boolean;

  constructor(data?: PartialMessage<DevicesTokenRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.DevicesTokenRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DevicesTokenRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DevicesTokenRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DevicesTokenRequest;

  static equals(a: DevicesTokenRequest | PlainMessage<DevicesTokenRequest> | undefined, b: DevicesTokenRequest | PlainMessage<DevicesTokenRequest> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.LDAPProviders
 */
export declare class LDAPProviders extends Message<LDAPProviders> {
  /**
   * map of keys to titles (titles can be empty)
   *
   * @generated from field: map<string, string> providers = 1;
   */
  providers: { [key: string]: string };

  constructor(data?: PartialMessage<LDAPProviders>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.LDAPProviders";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LDAPProviders;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LDAPProviders;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LDAPProviders;

  static equals(a: LDAPProviders | PlainMessage<LDAPProviders> | undefined, b: LDAPProviders | PlainMessage<LDAPProviders> | undefined): boolean;
}

