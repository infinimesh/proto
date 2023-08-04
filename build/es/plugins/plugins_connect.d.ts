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
// @generated from file plugins/plugins.proto (package infinimesh.plugins, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ListRequest, Plugin, Plugins } from "./plugins_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service infinimesh.plugins.PluginsService
 */
export declare const PluginsService: {
  readonly typeName: "infinimesh.plugins.PluginsService",
  readonly methods: {
    /**
     * @generated from rpc infinimesh.plugins.PluginsService.Get
     */
    readonly get: {
      readonly name: "Get",
      readonly I: typeof Plugin,
      readonly O: typeof Plugin,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.plugins.PluginsService.List
     */
    readonly list: {
      readonly name: "List",
      readonly I: typeof ListRequest,
      readonly O: typeof Plugins,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.plugins.PluginsService.Create
     */
    readonly create: {
      readonly name: "Create",
      readonly I: typeof Plugin,
      readonly O: typeof Plugin,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.plugins.PluginsService.Update
     */
    readonly update: {
      readonly name: "Update",
      readonly I: typeof Plugin,
      readonly O: typeof Plugin,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.plugins.PluginsService.Delete
     */
    readonly delete: {
      readonly name: "Delete",
      readonly I: typeof Plugin,
      readonly O: typeof Plugin,
      readonly kind: MethodKind.Unary,
    },
  }
};

