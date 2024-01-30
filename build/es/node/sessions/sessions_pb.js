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
// @generated from file node/sessions/sessions.proto (package infinimesh.node.sessions, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message infinimesh.node.sessions.Session
 */
export const Session = proto3.makeMessageType(
  "infinimesh.node.sessions.Session",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "expires", kind: "message", T: Timestamp, opt: true },
    { no: 4, name: "created", kind: "message", T: Timestamp },
    { no: 5, name: "current", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ],
);

/**
 * @generated from message infinimesh.node.sessions.Activity
 */
export const Activity = proto3.makeMessageType(
  "infinimesh.node.sessions.Activity",
  () => [
    { no: 1, name: "last_seen", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Timestamp} },
  ],
);

/**
 * @generated from message infinimesh.node.sessions.Sessions
 */
export const Sessions = proto3.makeMessageType(
  "infinimesh.node.sessions.Sessions",
  () => [
    { no: 1, name: "sessions", kind: "message", T: Session, repeated: true },
  ],
);

