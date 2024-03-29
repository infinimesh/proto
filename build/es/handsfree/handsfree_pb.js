//
//Copyright © 2021-2023 Infinite Devices GmbH, Nikita Ivanovski info@slnt-opp.xyz
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
// @generated from file handsfree/handsfree.proto (package infinimesh.handsfree, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum infinimesh.handsfree.Code
 */
export const Code = /*@__PURE__*/ proto3.makeEnum(
  "infinimesh.handsfree.Code",
  [
    {no: 0, name: "UNKNOWN"},
    {no: 1, name: "AUTH"},
    {no: 2, name: "DATA"},
    {no: 3, name: "SUCCESS"},
    {no: 4, name: "ERROR"},
  ],
);

/**
 * @generated from message infinimesh.handsfree.ConnectionRequest
 */
export const ConnectionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.handsfree.ConnectionRequest",
  () => [
    { no: 1, name: "app_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "payload", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message infinimesh.handsfree.ControlPacket
 */
export const ControlPacket = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.handsfree.ControlPacket",
  () => [
    { no: 1, name: "code", kind: "enum", T: proto3.getEnumType(Code) },
    { no: 2, name: "payload", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "app_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

