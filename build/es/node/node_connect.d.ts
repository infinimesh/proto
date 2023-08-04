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
// @generated from file node/node.proto (package infinimesh.node, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteCredentialsRequest, DeleteResponse, DevicesTokenRequest, EmptyMessage, GetCredentialsRequest, GetCredentialsResponse, JoinGeneralRequest, JoinRequest, LDAPProviders, MoveRequest, QueryRequest, SetCredentialsRequest, SetCredentialsResponse, TokenRequest, TokenResponse } from "./node_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { Account, Accounts, CreateRequest, CreateResponse } from "./accounts/accounts_pb.js";
import { Namespace, Namespaces } from "./namespaces/namespaces_pb.js";
import { Node, Nodes } from "./access/access_pb.js";
import { Activity, Session, Sessions } from "./sessions/sessions_pb.js";
import { CreateRequest as CreateRequest$1, CreateResponse as CreateResponse$1, Device, Devices, GetByFingerprintRequest } from "./devices/devices_pb.js";
import { GetRequest, GetResponse, RemoveRequest, Shadow, StreamShadowRequest } from "../shadow/shadow_pb.js";

/**
 * @generated from service infinimesh.node.AccountsService
 */
export declare const AccountsService: {
  readonly typeName: "infinimesh.node.AccountsService",
  readonly methods: {
    /**
     * @generated from rpc infinimesh.node.AccountsService.Token
     */
    readonly token: {
      readonly name: "Token",
      readonly I: typeof TokenRequest,
      readonly O: typeof TokenResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Get
     */
    readonly get: {
      readonly name: "Get",
      readonly I: typeof Account,
      readonly O: typeof Account,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.List
     */
    readonly list: {
      readonly name: "List",
      readonly I: typeof EmptyMessage,
      readonly O: typeof Accounts,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Create
     */
    readonly create: {
      readonly name: "Create",
      readonly I: typeof CreateRequest,
      readonly O: typeof CreateResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Update
     */
    readonly update: {
      readonly name: "Update",
      readonly I: typeof Account,
      readonly O: typeof Account,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Toggle
     */
    readonly toggle: {
      readonly name: "Toggle",
      readonly I: typeof Account,
      readonly O: typeof Account,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Delete
     */
    readonly delete: {
      readonly name: "Delete",
      readonly I: typeof Account,
      readonly O: typeof DeleteResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Accessibles
     */
    readonly accessibles: {
      readonly name: "Accessibles",
      readonly I: typeof Namespace,
      readonly O: typeof Nodes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Deletables
     */
    readonly deletables: {
      readonly name: "Deletables",
      readonly I: typeof Account,
      readonly O: typeof Nodes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Move
     */
    readonly move: {
      readonly name: "Move",
      readonly I: typeof MoveRequest,
      readonly O: typeof EmptyMessage,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.GetCredentials
     */
    readonly getCredentials: {
      readonly name: "GetCredentials",
      readonly I: typeof GetCredentialsRequest,
      readonly O: typeof GetCredentialsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.SetCredentials
     */
    readonly setCredentials: {
      readonly name: "SetCredentials",
      readonly I: typeof SetCredentialsRequest,
      readonly O: typeof SetCredentialsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.DelCredentials
     */
    readonly delCredentials: {
      readonly name: "DelCredentials",
      readonly I: typeof DeleteCredentialsRequest,
      readonly O: typeof DeleteResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service infinimesh.node.SessionsService
 */
export declare const SessionsService: {
  readonly typeName: "infinimesh.node.SessionsService",
  readonly methods: {
    /**
     * @generated from rpc infinimesh.node.SessionsService.Get
     */
    readonly get: {
      readonly name: "Get",
      readonly I: typeof EmptyMessage,
      readonly O: typeof Sessions,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.SessionsService.Revoke
     */
    readonly revoke: {
      readonly name: "Revoke",
      readonly I: typeof Session,
      readonly O: typeof DeleteResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.SessionsService.GetActivity
     */
    readonly getActivity: {
      readonly name: "GetActivity",
      readonly I: typeof EmptyMessage,
      readonly O: typeof Activity,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service infinimesh.node.NamespacesService
 */
export declare const NamespacesService: {
  readonly typeName: "infinimesh.node.NamespacesService",
  readonly methods: {
    /**
     * @generated from rpc infinimesh.node.NamespacesService.Get
     */
    readonly get: {
      readonly name: "Get",
      readonly I: typeof Namespace,
      readonly O: typeof Namespace,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.NamespacesService.List
     */
    readonly list: {
      readonly name: "List",
      readonly I: typeof EmptyMessage,
      readonly O: typeof Namespaces,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.NamespacesService.Create
     */
    readonly create: {
      readonly name: "Create",
      readonly I: typeof Namespace,
      readonly O: typeof Namespace,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.NamespacesService.Update
     */
    readonly update: {
      readonly name: "Update",
      readonly I: typeof Namespace,
      readonly O: typeof Namespace,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.NamespacesService.Delete
     */
    readonly delete: {
      readonly name: "Delete",
      readonly I: typeof Namespace,
      readonly O: typeof DeleteResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.NamespacesService.Accessibles
     */
    readonly accessibles: {
      readonly name: "Accessibles",
      readonly I: typeof Namespace,
      readonly O: typeof Nodes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.NamespacesService.Deletables
     */
    readonly deletables: {
      readonly name: "Deletables",
      readonly I: typeof Namespace,
      readonly O: typeof Nodes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Accounts having access to this namespace
     *
     * @generated from rpc infinimesh.node.NamespacesService.Joins
     */
    readonly joins: {
      readonly name: "Joins",
      readonly I: typeof Namespace,
      readonly O: typeof Accounts,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Sets Access to this namespace for the given account(deletes if level is set
     * to NONE(0))
     *
     * @generated from rpc infinimesh.node.NamespacesService.Join
     */
    readonly join: {
      readonly name: "Join",
      readonly I: typeof JoinRequest,
      readonly O: typeof Accounts,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service infinimesh.node.DevicesService
 */
export declare const DevicesService: {
  readonly typeName: "infinimesh.node.DevicesService",
  readonly methods: {
    /**
     * @generated from rpc infinimesh.node.DevicesService.Get
     */
    readonly get: {
      readonly name: "Get",
      readonly I: typeof Device,
      readonly O: typeof Device,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.List
     */
    readonly list: {
      readonly name: "List",
      readonly I: typeof QueryRequest,
      readonly O: typeof Devices,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.Create
     */
    readonly create: {
      readonly name: "Create",
      readonly I: typeof CreateRequest$1,
      readonly O: typeof CreateResponse$1,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.Update
     */
    readonly update: {
      readonly name: "Update",
      readonly I: typeof Device,
      readonly O: typeof Device,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.Delete
     */
    readonly delete: {
      readonly name: "Delete",
      readonly I: typeof Device,
      readonly O: typeof DeleteResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.Toggle
     */
    readonly toggle: {
      readonly name: "Toggle",
      readonly I: typeof Device,
      readonly O: typeof Device,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.ToggleBasic
     */
    readonly toggleBasic: {
      readonly name: "ToggleBasic",
      readonly I: typeof Device,
      readonly O: typeof Device,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.MakeDevicesToken
     */
    readonly makeDevicesToken: {
      readonly name: "MakeDevicesToken",
      readonly I: typeof DevicesTokenRequest,
      readonly O: typeof TokenResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Moves Device between Namespaces
     *
     * @generated from rpc infinimesh.node.DevicesService.Move
     */
    readonly move: {
      readonly name: "Move",
      readonly I: typeof MoveRequest,
      readonly O: typeof EmptyMessage,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Accounts and Namesapces having access to this Device
     *
     * @generated from rpc infinimesh.node.DevicesService.Joins
     */
    readonly joins: {
      readonly name: "Joins",
      readonly I: typeof Device,
      readonly O: typeof Nodes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Sets Access to this namespace for the given Node(Account or Namespace)
     * (deletes if level is set to NONE(0)) Node is interpret as a Device (uuid is
     * enough) and Join as an Account or Namespace (must be provided fully)
     *
     * @generated from rpc infinimesh.node.DevicesService.Join
     */
    readonly join: {
      readonly name: "Join",
      readonly I: typeof JoinGeneralRequest,
      readonly O: typeof Node,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.GetByToken
     */
    readonly getByToken: {
      readonly name: "GetByToken",
      readonly I: typeof Device,
      readonly O: typeof Device,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.GetByFingerprint
     */
    readonly getByFingerprint: {
      readonly name: "GetByFingerprint",
      readonly I: typeof GetByFingerprintRequest,
      readonly O: typeof Device,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service infinimesh.node.ShadowService
 */
export declare const ShadowService: {
  readonly typeName: "infinimesh.node.ShadowService",
  readonly methods: {
    /**
     * @generated from rpc infinimesh.node.ShadowService.Get
     */
    readonly get: {
      readonly name: "Get",
      readonly I: typeof GetRequest,
      readonly O: typeof GetResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.ShadowService.Patch
     */
    readonly patch: {
      readonly name: "Patch",
      readonly I: typeof Shadow,
      readonly O: typeof Shadow,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.ShadowService.Remove
     */
    readonly remove: {
      readonly name: "Remove",
      readonly I: typeof RemoveRequest,
      readonly O: typeof Shadow,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.ShadowService.StreamShadow
     */
    readonly streamShadow: {
      readonly name: "StreamShadow",
      readonly I: typeof StreamShadowRequest,
      readonly O: typeof Shadow,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc infinimesh.node.ShadowService.StreamShadowSync
     */
    readonly streamShadowSync: {
      readonly name: "StreamShadowSync",
      readonly I: typeof StreamShadowRequest,
      readonly O: typeof Shadow,
      readonly kind: MethodKind.ServerStreaming,
    },
  }
};

/**
 * not revenue
 *
 * @generated from service infinimesh.node.InternalService
 */
export declare const InternalService: {
  readonly typeName: "infinimesh.node.InternalService",
  readonly methods: {
    /**
     * @generated from rpc infinimesh.node.InternalService.GetLDAPProviders
     */
    readonly getLDAPProviders: {
      readonly name: "GetLDAPProviders",
      readonly I: typeof EmptyMessage,
      readonly O: typeof LDAPProviders,
      readonly kind: MethodKind.Unary,
    },
  }
};

