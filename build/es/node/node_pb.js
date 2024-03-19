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
// @generated from file node/node.proto (package infinimesh.node, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Value } from "@bufbuild/protobuf";
import { Credentials } from "./accounts/accounts_pb.js";
import { Level } from "./access/access_pb.js";

/**
 * @generated from enum infinimesh.node.Sort
 */
export const Sort = /*@__PURE__*/ proto3.makeEnum(
  "infinimesh.node.Sort",
  [
    {no: 0, name: "title"},
    {no: 1, name: "last_updated"},
    {no: 2, name: "enabled"},
  ],
);

/**
 * @generated from message infinimesh.node.TokenRequest
 */
export const TokenRequest = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.TokenRequest",
  () => [
    { no: 1, name: "auth", kind: "message", T: Credentials },
    { no: 2, name: "exp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "inf", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 5, name: "client", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message infinimesh.node.TokenResponse
 */
export const TokenResponse = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.TokenResponse",
  () => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message infinimesh.node.SetCredentialsRequest
 */
export const SetCredentialsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.SetCredentialsRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "credentials", kind: "message", T: Credentials },
  ],
);

/**
 * @generated from message infinimesh.node.SetCredentialsResponse
 */
export const SetCredentialsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.SetCredentialsResponse",
  [],
);

/**
 * @generated from message infinimesh.node.GetCredentialsRequest
 */
export const GetCredentialsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.GetCredentialsRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message infinimesh.node.GetCredentialsResponse
 */
export const GetCredentialsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.GetCredentialsResponse",
  () => [
    { no: 1, name: "credentials", kind: "message", T: Credentials, repeated: true },
  ],
);

/**
 * @generated from message infinimesh.node.DeleteCredentialsRequest
 */
export const DeleteCredentialsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.DeleteCredentialsRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message infinimesh.node.DeleteResponse
 */
export const DeleteResponse = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.DeleteResponse",
  [],
);

/**
 * @generated from message infinimesh.node.EmptyMessage
 */
export const EmptyMessage = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.EmptyMessage",
  [],
);

/**
 * @generated from message infinimesh.node.QueryRequest
 */
export const QueryRequest = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.QueryRequest",
  () => [
    { no: 1, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 4, name: "limit", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 5, name: "field", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "sort", kind: "enum", T: proto3.getEnumType(Sort), opt: true },
    { no: 7, name: "filters", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message infinimesh.node.MoveRequest
 */
export const MoveRequest = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.MoveRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message infinimesh.node.JoinRequest
 */
export const JoinRequest = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.JoinRequest",
  () => [
    { no: 1, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "access", kind: "enum", T: proto3.getEnumType(Level) },
  ],
);

/**
 * Generally, adds link like | join ---access---> node |
 *
 * @generated from message infinimesh.node.JoinGeneralRequest
 */
export const JoinGeneralRequest = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.JoinGeneralRequest",
  () => [
    { no: 1, name: "node", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "join", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "access", kind: "enum", T: proto3.getEnumType(Level) },
  ],
);

/**
 * @generated from message infinimesh.node.DevicesTokenRequest
 */
export const DevicesTokenRequest = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.DevicesTokenRequest",
  () => [
    { no: 1, name: "devices", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "enum", T: proto3.getEnumType(Level)} },
    { no: 2, name: "exp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message infinimesh.node.LDAPProviders
 */
export const LDAPProviders = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.LDAPProviders",
  () => [
    { no: 1, name: "providers", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

