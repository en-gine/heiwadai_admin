// @generated by protoc-gen-connect-query v1.1.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/admin/Messages.proto (package server.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { GetMessageRequest, MessageCreateRequest, MessageIDRequest, MessageResponse, MessagesResponse, MessageUpdateRequest } from "./Messages_pb.ts";

/**
 * @generated from rpc server.admin.MessageController.GetByID
 */
export const getByID = {
  localName: "getByID",
  name: "GetByID",
  kind: MethodKind.Unary,
  I: MessageIDRequest,
  O: MessageResponse,
  service: {
    typeName: "server.admin.MessageController"
  }
} as const;

/**
 * @generated from rpc server.admin.MessageController.GetList
 */
export const getList = {
  localName: "getList",
  name: "GetList",
  kind: MethodKind.Unary,
  I: GetMessageRequest,
  O: MessagesResponse,
  service: {
    typeName: "server.admin.MessageController"
  }
} as const;

/**
 * @generated from rpc server.admin.MessageController.Create
 */
export const create = {
  localName: "create",
  name: "Create",
  kind: MethodKind.Unary,
  I: MessageCreateRequest,
  O: MessageResponse,
  service: {
    typeName: "server.admin.MessageController"
  }
} as const;

/**
 * @generated from rpc server.admin.MessageController.Update
 */
export const update = {
  localName: "update",
  name: "Update",
  kind: MethodKind.Unary,
  I: MessageUpdateRequest,
  O: MessageResponse,
  service: {
    typeName: "server.admin.MessageController"
  }
} as const;

/**
 * @generated from rpc server.admin.MessageController.Delete
 */
export const delete$ = {
  localName: "delete",
  name: "Delete",
  kind: MethodKind.Unary,
  I: MessageIDRequest,
  O: Empty,
  service: {
    typeName: "server.admin.MessageController"
  }
} as const;
