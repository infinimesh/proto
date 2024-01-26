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
// @generated from file node/accounts/accounts.proto (package infinimesh.node.accounts, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Struct } from "@bufbuild/protobuf";
import { Access } from "../access/access_pb.js";

/**
 * @generated from message infinimesh.node.accounts.Credentials
 */
export const Credentials = proto3.makeMessageType(
  "infinimesh.node.accounts.Credentials",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message infinimesh.node.accounts.Account
 */
export const Account = proto3.makeMessageType(
  "infinimesh.node.accounts.Account",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "default_namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "access", kind: "message", T: Access, opt: true },
    { no: 6, name: "config", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message infinimesh.node.accounts.CreateRequest
 */
export const CreateRequest = proto3.makeMessageType(
  "infinimesh.node.accounts.CreateRequest",
  () => [
    { no: 1, name: "account", kind: "message", T: Account },
    { no: 2, name: "credentials", kind: "message", T: Credentials },
    { no: 3, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "access", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * @generated from message infinimesh.node.accounts.CreateResponse
 */
export const CreateResponse = proto3.makeMessageType(
  "infinimesh.node.accounts.CreateResponse",
  () => [
    { no: 1, name: "account", kind: "message", T: Account },
  ],
);

/**
 * @generated from message infinimesh.node.accounts.Accounts
 */
export const Accounts = proto3.makeMessageType(
  "infinimesh.node.accounts.Accounts",
  () => [
    { no: 1, name: "accounts", kind: "message", T: Account, repeated: true },
  ],
);

