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
// @generated from file node/namespaces/namespaces.proto (package infinimesh.node.namespaces, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Struct } from "@bufbuild/protobuf";
import { Access } from "../access/access_pb.js";

/**
 * @generated from message infinimesh.node.namespaces.Plugin
 */
export const Plugin = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.namespaces.Plugin",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "vars", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

/**
 * @generated from message infinimesh.node.namespaces.Namespace
 */
export const Namespace = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.namespaces.Namespace",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "access", kind: "message", T: Access, opt: true },
    { no: 4, name: "plugin", kind: "message", T: Plugin, opt: true },
    { no: 5, name: "config", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message infinimesh.node.namespaces.Namespaces
 */
export const Namespaces = /*@__PURE__*/ proto3.makeMessageType(
  "infinimesh.node.namespaces.Namespaces",
  () => [
    { no: 1, name: "namespaces", kind: "message", T: Namespace, repeated: true },
  ],
);

