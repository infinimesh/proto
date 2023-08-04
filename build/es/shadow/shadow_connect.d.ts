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

// @generated by protoc-gen-connect-es v0.9.1 with parameter "target=js+dts"
// @generated from file shadow/shadow.proto (package infinimesh.shadow, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetRequest, GetResponse, RemoveRequest, Shadow, StreamShadowRequest } from "./shadow_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service infinimesh.shadow.ShadowService
 */
export declare const ShadowService: {
  readonly typeName: "infinimesh.shadow.ShadowService",
  readonly methods: {
    /**
     * @generated from rpc infinimesh.shadow.ShadowService.Get
     */
    readonly get: {
      readonly name: "Get",
      readonly I: typeof GetRequest,
      readonly O: typeof GetResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.shadow.ShadowService.Patch
     */
    readonly patch: {
      readonly name: "Patch",
      readonly I: typeof Shadow,
      readonly O: typeof Shadow,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.shadow.ShadowService.Remove
     */
    readonly remove: {
      readonly name: "Remove",
      readonly I: typeof RemoveRequest,
      readonly O: typeof Shadow,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.shadow.ShadowService.StreamShadow
     */
    readonly streamShadow: {
      readonly name: "StreamShadow",
      readonly I: typeof StreamShadowRequest,
      readonly O: typeof Shadow,
      readonly kind: MethodKind.ServerStreaming,
    },
  }
};

