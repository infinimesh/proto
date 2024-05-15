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
// @generated from file plugins/plugins.proto (package infinimesh.plugins, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Access } from "../node/access/access_pb.js";

/**
 * @generated from enum infinimesh.plugins.PluginKind
 */
export declare enum PluginKind {
  /**
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * Plugin will be embedded into Console as Dashboard
   *
   * @generated from enum value: EMBEDDED = 1;
   */
  EMBEDDED = 1,

  /**
   * Plugin entrypoint page will replace device State Card, and edit
   *
   * @generated from enum value: DEVICE = 2;
   */
  DEVICE = 2,
}

/**
 * @generated from message infinimesh.plugins.Plugin
 */
export declare class Plugin extends Message<Plugin> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * Plugin logo url in format supported by <img> tag
   *
   * @generated from field: string logo = 2;
   */
  logo: string;

  /**
   * @generated from field: string title = 3;
   */
  title: string;

  /**
   * (optionally Markdown) long description Marketplace like
   *
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * see Namespace field
   *
   * @generated from field: bool public = 5;
   */
  public: boolean;

  /**
   * Required to get not-public Plugin
   *
   * @generated from field: optional string namespace = 6;
   */
  namespace?: string;

  /**
   * @generated from field: optional infinimesh.node.access.Access access = 7;
   */
  access?: Access;

  /**
   * @generated from field: infinimesh.plugins.PluginKind kind = 8;
   */
  kind: PluginKind;

  /**
   * @generated from field: repeated string vars = 9;
   */
  vars: string[];

  /**
   * @generated from field: optional infinimesh.plugins.EmbededPluginConf embedded_conf = 10;
   */
  embeddedConf?: EmbededPluginConf;

  /**
   * @generated from field: optional infinimesh.plugins.DevicePluginConf device_conf = 11;
   */
  deviceConf?: DevicePluginConf;

  constructor(data?: PartialMessage<Plugin>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.plugins.Plugin";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Plugin;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Plugin;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Plugin;

  static equals(a: Plugin | PlainMessage<Plugin> | undefined, b: Plugin | PlainMessage<Plugin> | undefined): boolean;
}

/**
 * @generated from message infinimesh.plugins.Plugins
 */
export declare class Plugins extends Message<Plugins> {
  /**
   * @generated from field: repeated infinimesh.plugins.Plugin pool = 1;
   */
  pool: Plugin[];

  constructor(data?: PartialMessage<Plugins>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.plugins.Plugins";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Plugins;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Plugins;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Plugins;

  static equals(a: Plugins | PlainMessage<Plugins> | undefined, b: Plugins | PlainMessage<Plugins> | undefined): boolean;
}

/**
 * @generated from message infinimesh.plugins.EmbededPluginConf
 */
export declare class EmbededPluginConf extends Message<EmbededPluginConf> {
  /**
   * @generated from field: string frame_url = 1;
   */
  frameUrl: string;

  constructor(data?: PartialMessage<EmbededPluginConf>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.plugins.EmbededPluginConf";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmbededPluginConf;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmbededPluginConf;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmbededPluginConf;

  static equals(a: EmbededPluginConf | PlainMessage<EmbededPluginConf> | undefined, b: EmbededPluginConf | PlainMessage<EmbededPluginConf> | undefined): boolean;
}

/**
 * @generated from message infinimesh.plugins.DevicePluginConf
 */
export declare class DevicePluginConf extends Message<DevicePluginConf> {
  /**
   * @generated from field: string view_url = 1;
   */
  viewUrl: string;

  /**
   * @generated from field: string desired_url = 2;
   */
  desiredUrl: string;

  constructor(data?: PartialMessage<DevicePluginConf>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.plugins.DevicePluginConf";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DevicePluginConf;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DevicePluginConf;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DevicePluginConf;

  static equals(a: DevicePluginConf | PlainMessage<DevicePluginConf> | undefined, b: DevicePluginConf | PlainMessage<DevicePluginConf> | undefined): boolean;
}

/**
 * @generated from message infinimesh.plugins.ListRequest
 */
export declare class ListRequest extends Message<ListRequest> {
  /**
   * @generated from field: optional string namespace = 1;
   */
  namespace?: string;

  constructor(data?: PartialMessage<ListRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "infinimesh.plugins.ListRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRequest;

  static equals(a: ListRequest | PlainMessage<ListRequest> | undefined, b: ListRequest | PlainMessage<ListRequest> | undefined): boolean;
}

