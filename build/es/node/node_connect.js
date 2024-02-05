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

// @generated by protoc-gen-connect-es v1.3.0 with parameter "target=js+dts"
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
export const AccountsService = {
  typeName: "infinimesh.node.AccountsService",
  methods: {
    /**
     * @generated from rpc infinimesh.node.AccountsService.Token
     */
    token: {
      name: "Token",
      I: TokenRequest,
      O: TokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Get
     */
    get: {
      name: "Get",
      I: Account,
      O: Account,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.List
     */
    list: {
      name: "List",
      I: EmptyMessage,
      O: Accounts,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Create
     */
    create: {
      name: "Create",
      I: CreateRequest,
      O: CreateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Update
     */
    update: {
      name: "Update",
      I: Account,
      O: Account,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Toggle
     */
    toggle: {
      name: "Toggle",
      I: Account,
      O: Account,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Delete
     */
    delete: {
      name: "Delete",
      I: Account,
      O: DeleteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Accessibles
     */
    accessibles: {
      name: "Accessibles",
      I: Namespace,
      O: Nodes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Deletables
     */
    deletables: {
      name: "Deletables",
      I: Account,
      O: Nodes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.Move
     */
    move: {
      name: "Move",
      I: MoveRequest,
      O: EmptyMessage,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.GetCredentials
     */
    getCredentials: {
      name: "GetCredentials",
      I: GetCredentialsRequest,
      O: GetCredentialsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.SetCredentials
     */
    setCredentials: {
      name: "SetCredentials",
      I: SetCredentialsRequest,
      O: SetCredentialsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.AccountsService.DelCredentials
     */
    delCredentials: {
      name: "DelCredentials",
      I: DeleteCredentialsRequest,
      O: DeleteResponse,
      kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service infinimesh.node.SessionsService
 */
export const SessionsService = {
  typeName: "infinimesh.node.SessionsService",
  methods: {
    /**
     * @generated from rpc infinimesh.node.SessionsService.Get
     */
    get: {
      name: "Get",
      I: EmptyMessage,
      O: Sessions,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.SessionsService.Revoke
     */
    revoke: {
      name: "Revoke",
      I: Session,
      O: DeleteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.SessionsService.GetActivity
     */
    getActivity: {
      name: "GetActivity",
      I: EmptyMessage,
      O: Activity,
      kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service infinimesh.node.NamespacesService
 */
export const NamespacesService = {
  typeName: "infinimesh.node.NamespacesService",
  methods: {
    /**
     * @generated from rpc infinimesh.node.NamespacesService.Get
     */
    get: {
      name: "Get",
      I: Namespace,
      O: Namespace,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.NamespacesService.List
     */
    list: {
      name: "List",
      I: EmptyMessage,
      O: Namespaces,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.NamespacesService.Create
     */
    create: {
      name: "Create",
      I: Namespace,
      O: Namespace,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.NamespacesService.Update
     */
    update: {
      name: "Update",
      I: Namespace,
      O: Namespace,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.NamespacesService.Delete
     */
    delete: {
      name: "Delete",
      I: Namespace,
      O: DeleteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.NamespacesService.Accessibles
     */
    accessibles: {
      name: "Accessibles",
      I: Namespace,
      O: Nodes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.NamespacesService.Deletables
     */
    deletables: {
      name: "Deletables",
      I: Namespace,
      O: Nodes,
      kind: MethodKind.Unary,
    },
    /**
     * Accounts having access to this namespace
     *
     * @generated from rpc infinimesh.node.NamespacesService.Joins
     */
    joins: {
      name: "Joins",
      I: Namespace,
      O: Accounts,
      kind: MethodKind.Unary,
    },
    /**
     * Sets Access to this namespace for the given account(deletes if level is set
     * to NONE(0))
     *
     * @generated from rpc infinimesh.node.NamespacesService.Join
     */
    join: {
      name: "Join",
      I: JoinRequest,
      O: Accounts,
      kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service infinimesh.node.DevicesService
 */
export const DevicesService = {
  typeName: "infinimesh.node.DevicesService",
  methods: {
    /**
     * @generated from rpc infinimesh.node.DevicesService.Get
     */
    get: {
      name: "Get",
      I: Device,
      O: Device,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.List
     */
    list: {
      name: "List",
      I: QueryRequest,
      O: Devices,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.Create
     */
    create: {
      name: "Create",
      I: CreateRequest$1,
      O: CreateResponse$1,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.Update
     */
    update: {
      name: "Update",
      I: Device,
      O: Device,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.PatchConfig
     */
    patchConfig: {
      name: "PatchConfig",
      I: Device,
      O: Device,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.Delete
     */
    delete: {
      name: "Delete",
      I: Device,
      O: DeleteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.Toggle
     */
    toggle: {
      name: "Toggle",
      I: Device,
      O: Device,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.ToggleBasic
     */
    toggleBasic: {
      name: "ToggleBasic",
      I: Device,
      O: Device,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.MakeDevicesToken
     */
    makeDevicesToken: {
      name: "MakeDevicesToken",
      I: DevicesTokenRequest,
      O: TokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Moves Device between Namespaces
     *
     * @generated from rpc infinimesh.node.DevicesService.Move
     */
    move: {
      name: "Move",
      I: MoveRequest,
      O: EmptyMessage,
      kind: MethodKind.Unary,
    },
    /**
     * Accounts and Namesapces having access to this Device
     *
     * @generated from rpc infinimesh.node.DevicesService.Joins
     */
    joins: {
      name: "Joins",
      I: Device,
      O: Nodes,
      kind: MethodKind.Unary,
    },
    /**
     * Sets Access to this namespace for the given Node(Account or Namespace)
     * (deletes if level is set to NONE(0)) Node is interpret as a Device (uuid is
     * enough) and Join as an Account or Namespace (must be provided fully)
     *
     * @generated from rpc infinimesh.node.DevicesService.Join
     */
    join: {
      name: "Join",
      I: JoinGeneralRequest,
      O: Node,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.GetByToken
     */
    getByToken: {
      name: "GetByToken",
      I: Device,
      O: Device,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.DevicesService.GetByFingerprint
     */
    getByFingerprint: {
      name: "GetByFingerprint",
      I: GetByFingerprintRequest,
      O: Device,
      kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service infinimesh.node.ShadowService
 */
export const ShadowService = {
  typeName: "infinimesh.node.ShadowService",
  methods: {
    /**
     * @generated from rpc infinimesh.node.ShadowService.Get
     */
    get: {
      name: "Get",
      I: GetRequest,
      O: GetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.ShadowService.Patch
     */
    patch: {
      name: "Patch",
      I: Shadow,
      O: Shadow,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.ShadowService.Remove
     */
    remove: {
      name: "Remove",
      I: RemoveRequest,
      O: Shadow,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc infinimesh.node.ShadowService.StreamShadow
     */
    streamShadow: {
      name: "StreamShadow",
      I: StreamShadowRequest,
      O: Shadow,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc infinimesh.node.ShadowService.StreamShadowSync
     */
    streamShadowSync: {
      name: "StreamShadowSync",
      I: StreamShadowRequest,
      O: Shadow,
      kind: MethodKind.ServerStreaming,
    },
  }
};

/**
 * not revenue
 *
 * @generated from service infinimesh.node.InternalService
 */
export const InternalService = {
  typeName: "infinimesh.node.InternalService",
  methods: {
    /**
     * @generated from rpc infinimesh.node.InternalService.GetLDAPProviders
     */
    getLDAPProviders: {
      name: "GetLDAPProviders",
      I: EmptyMessage,
      O: LDAPProviders,
      kind: MethodKind.Unary,
    },
  }
};

