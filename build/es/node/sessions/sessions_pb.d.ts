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

// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts"
// @generated from file node/sessions/sessions.proto (package infinimesh.node.sessions, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message infinimesh.node.sessions.Session
 */
export declare class Session extends Message<Session> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string client = 2;
   */
  client: string;

  /**
   * @generated from field: optional google.protobuf.Timestamp expires = 3;
   */
  expires?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp created = 4;
   */
  created?: Timestamp;

  /**
   * @generated from field: optional bool current = 5;
   */
  current?: boolean;

  constructor(data?: PartialMessage<Session>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.sessions.Session";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Session;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Session;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Session;

  static equals(a: Session | PlainMessage<Session> | undefined, b: Session | PlainMessage<Session> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.sessions.Activity
 */
export declare class Activity extends Message<Activity> {
  /**
   * @generated from field: map<string, google.protobuf.Timestamp> last_seen = 1;
   */
  lastSeen: { [key: string]: Timestamp };

  constructor(data?: PartialMessage<Activity>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.sessions.Activity";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Activity;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Activity;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Activity;

  static equals(a: Activity | PlainMessage<Activity> | undefined, b: Activity | PlainMessage<Activity> | undefined): boolean;
}

/**
 * @generated from message infinimesh.node.sessions.Sessions
 */
export declare class Sessions extends Message<Sessions> {
  /**
   * @generated from field: repeated infinimesh.node.sessions.Session sessions = 1;
   */
  sessions: Session[];

  constructor(data?: PartialMessage<Sessions>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.node.sessions.Sessions";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Sessions;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Sessions;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Sessions;

  static equals(a: Sessions | PlainMessage<Sessions> | undefined, b: Sessions | PlainMessage<Sessions> | undefined): boolean;
}

