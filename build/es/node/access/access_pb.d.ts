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

// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file node/access/access.proto (package infinimesh.node.access, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum infinimesh.node.access.Level
 */
export declare enum Level {
  /**
   * @generated from enum value: NONE = 0;
   */
  NONE = 0,

  /**
   * @generated from enum value: READ = 1;
   */
  READ = 1,

  /**
   * @generated from enum value: MGMT = 2;
   */
  MGMT = 2,

  /**
   * @generated from enum value: ADMIN = 3;
   */
  ADMIN = 3,

  /**
   * @generated from enum value: ROOT = 4;
   */
  ROOT = 4,
}

/**
 * @generated from enum infinimesh.node.access.Role
 */
export declare enum Role {
  /**
   * @generated from enum value: UNSET = 0;
   */
  UNSET = 0,

  /**
   * @generated from enum value: OWNER = 1;
   */
  OWNER = 1,

  /**
   * @generated from enum value: SHARED = 2;
   */
  SHARED = 2,
}

/**
 * @generated from message infinimesh.node.access.Access
 */
export declare class Access extends Message<Access> {
  /**
   * @generated from field: infinimesh.node.access.Level level = 1;
   */
  level: Level;

  /**
   * @generated from field: infinimesh.node.access.Role role = 2;
   */
  role: Role;

  /**
   * @generated from field: optional string namespace = 3;
   */
  namespace?: string;

  constructor(data?: PartialMessage<Access>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.access.Access";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Access;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Access;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Access;

  static equals(a: Access | PlainMessage<Access> | undefined, b: Access | PlainMessage<Access> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.access.Node
 */
export declare class Node extends Message<Node> {
  /**
   * @generated from field: string node = 1;
   */
  node: string;

  /**
   * @generated from field: string parent = 2;
   */
  parent: string;

  /**
   * @private
   *
   * @generated from field: string edge = 3;
   */
  edge: string;

  /**
   * @generated from field: optional infinimesh.node.access.Access access = 4;
   */
  access?: Access;

  constructor(data?: PartialMessage<Node>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.access.Node";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Node;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Node;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Node;

  static equals(a: Node | PlainMessage<Node> | undefined, b: Node | PlainMessage<Node> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.access.Nodes
 */
export declare class Nodes extends Message<Nodes> {
  /**
   * @generated from field: repeated infinimesh.node.access.Node nodes = 1;
   */
  nodes: Node[];

  constructor(data?: PartialMessage<Nodes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.access.Nodes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Nodes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Nodes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Nodes;

  static equals(a: Nodes | PlainMessage<Nodes> | undefined, b: Nodes | PlainMessage<Nodes> | undefined): boolean;
}

