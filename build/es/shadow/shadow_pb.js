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

// @generated by protoc-gen-es v1.6.0 with parameter "target=js+dts"
// @generated from file shadow/shadow.proto (package infinimesh.shadow, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Struct, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum infinimesh.shadow.StateKey
 */
export const StateKey = proto3.makeEnum(
  "infinimesh.shadow.StateKey",
  [
    {no: 0, name: "REPORTED"},
    {no: 1, name: "DESIRED"},
    {no: 2, name: "CONNECTION"},
  ],
);

/**
 * @generated from message infinimesh.shadow.State
 */
export const State = proto3.makeMessageType(
  "infinimesh.shadow.State",
  () => [
    { no: 1, name: "timestamp", kind: "message", T: Timestamp },
    { no: 2, name: "data", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message infinimesh.shadow.ConnectionState
 */
export const ConnectionState = proto3.makeMessageType(
  "infinimesh.shadow.ConnectionState",
  () => [
    { no: 1, name: "timestamp", kind: "message", T: Timestamp },
    { no: 2, name: "connected", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message infinimesh.shadow.Shadow
 */
export const Shadow = proto3.makeMessageType(
  "infinimesh.shadow.Shadow",
  () => [
    { no: 1, name: "device", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "reported", kind: "message", T: State },
    { no: 3, name: "desired", kind: "message", T: State },
    { no: 4, name: "connection", kind: "message", T: ConnectionState },
  ],
);

/**
 * @generated from message infinimesh.shadow.GetRequest
 */
export const GetRequest = proto3.makeMessageType(
  "infinimesh.shadow.GetRequest",
  () => [
    { no: 1, name: "pool", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message infinimesh.shadow.GetResponse
 */
export const GetResponse = proto3.makeMessageType(
  "infinimesh.shadow.GetResponse",
  () => [
    { no: 1, name: "shadows", kind: "message", T: Shadow, repeated: true },
  ],
);

/**
 * @generated from message infinimesh.shadow.RemoveRequest
 */
export const RemoveRequest = proto3.makeMessageType(
  "infinimesh.shadow.RemoveRequest",
  () => [
    { no: 1, name: "device", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "state_key", kind: "enum", T: proto3.getEnumType(StateKey) },
    { no: 3, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message infinimesh.shadow.StreamShadowRequest
 */
export const StreamShadowRequest = proto3.makeMessageType(
  "infinimesh.shadow.StreamShadowRequest",
  () => [
    { no: 1, name: "devices", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "only_delta", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "sync", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

