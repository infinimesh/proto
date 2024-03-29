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

// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file node/accounts/accounts.proto (package infinimesh.node.accounts, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Struct } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Access } from "../access/access_pb.js";

/**
 * @generated from message infinimesh.node.accounts.Credentials
 */
export declare class Credentials extends Message<Credentials> {
  /**
   * @generated from field: string type = 1;
   */
  type: string;

  /**
   * Important: first element of data is reaccessible
   *
   * @generated from field: repeated string data = 2;
   */
  data: string[];

  constructor(data?: PartialMessage<Credentials>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.accounts.Credentials";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Credentials;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Credentials;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Credentials;

  static equals(a: Credentials | PlainMessage<Credentials> | undefined, b: Credentials | PlainMessage<Credentials> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.accounts.Account
 */
export declare class Account extends Message<Account> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * @generated from field: bool enabled = 3;
   */
  enabled: boolean;

  /**
   * @generated from field: string default_namespace = 4;
   */
  defaultNamespace: string;

  /**
   * @generated from field: optional infinimesh.node.access.Access access = 5;
   */
  access?: Access;

  /**
   * @generated from field: google.protobuf.Struct config = 6;
   */
  config?: Struct;

  constructor(data?: PartialMessage<Account>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.accounts.Account";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Account;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Account;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Account;

  static equals(a: Account | PlainMessage<Account> | undefined, b: Account | PlainMessage<Account> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.accounts.CreateRequest
 */
export declare class CreateRequest extends Message<CreateRequest> {
  /**
   * @generated from field: infinimesh.node.accounts.Account account = 1;
   */
  account?: Account;

  /**
   * Credentials for New Account
   *
   * @generated from field: infinimesh.node.accounts.Credentials credentials = 2;
   */
  credentials?: Credentials;

  /**
   * Namespace to put Account under
   *
   * @generated from field: string namespace = 3;
   */
  namespace: string;

  /**
   * Account access level to parent namespace
   *
   * @generated from field: optional int32 access = 4;
   */
  access?: number;

  constructor(data?: PartialMessage<CreateRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.accounts.CreateRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRequest;

  static equals(a: CreateRequest | PlainMessage<CreateRequest> | undefined, b: CreateRequest | PlainMessage<CreateRequest> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.accounts.CreateResponse
 */
export declare class CreateResponse extends Message<CreateResponse> {
  /**
   * @generated from field: infinimesh.node.accounts.Account account = 1;
   */
  account?: Account;

  constructor(data?: PartialMessage<CreateResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.accounts.CreateResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateResponse;

  static equals(a: CreateResponse | PlainMessage<CreateResponse> | undefined, b: CreateResponse | PlainMessage<CreateResponse> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.accounts.Accounts
 */
export declare class Accounts extends Message<Accounts> {
  /**
   * @generated from field: repeated infinimesh.node.accounts.Account accounts = 1;
   */
  accounts: Account[];

  constructor(data?: PartialMessage<Accounts>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.accounts.Accounts";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Accounts;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Accounts;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Accounts;

  static equals(a: Accounts | PlainMessage<Accounts> | undefined, b: Accounts | PlainMessage<Accounts> | undefined): boolean;
}

