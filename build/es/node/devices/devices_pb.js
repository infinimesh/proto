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

// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file node/devices/devices.proto (package infinimesh.node.devices, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Struct, Timestamp } from "@bufbuild/protobuf";
import { Access } from "../access/access_pb.js";

/**
 * @generated from message infinimesh.node.devices.Device
 */
export const Device = proto3.makeMessageType(
  "infinimesh.node.devices.Device",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "certificate", kind: "message", T: Certificate },
    { no: 5, name: "tags", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "basic_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "access", kind: "message", T: Access, opt: true },
    { no: 9, name: "config", kind: "message", T: Struct },
    { no: 10, name: "last_updated", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message infinimesh.node.devices.Certificate
 */
export const Certificate = proto3.makeMessageType(
  "infinimesh.node.devices.Certificate",
  () => [
    { no: 1, name: "pem_data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "algorithm", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "fingerprint", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message infinimesh.node.devices.Devices
 */
export const Devices = proto3.makeMessageType(
  "infinimesh.node.devices.Devices",
  () => [
    { no: 1, name: "devices", kind: "message", T: Device, repeated: true },
    { no: 2, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message infinimesh.node.devices.HandsfreeCreate
 */
export const HandsfreeCreate = proto3.makeMessageType(
  "infinimesh.node.devices.HandsfreeCreate",
  () => [
    { no: 1, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "payload", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message infinimesh.node.devices.CreateRequest
 */
export const CreateRequest = proto3.makeMessageType(
  "infinimesh.node.devices.CreateRequest",
  () => [
    { no: 1, name: "device", kind: "message", T: Device },
    { no: 2, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "handsfree", kind: "message", T: HandsfreeCreate, opt: true },
  ],
);

/**
 * @generated from message infinimesh.node.devices.CreateResponse
 */
export const CreateResponse = proto3.makeMessageType(
  "infinimesh.node.devices.CreateResponse",
  () => [
    { no: 1, name: "device", kind: "message", T: Device },
  ],
);

/**
 * @generated from message infinimesh.node.devices.GetByFingerprintRequest
 */
export const GetByFingerprintRequest = proto3.makeMessageType(
  "infinimesh.node.devices.GetByFingerprintRequest",
  () => [
    { no: 1, name: "fingerprint", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

