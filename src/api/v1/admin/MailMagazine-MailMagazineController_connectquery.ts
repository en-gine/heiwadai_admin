// @generated by protoc-gen-connect-query v1.1.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/admin/MailMagazine.proto (package server.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { DeleteMailMagazineRequest, GetMailMagazineListRequest, MailMagazine, MailMagazineIDRequest, MailMagazinesResponse, SaveDraftRequest, SendMailMagazineRequest, UpdateMailMagazineRequest, UserLogListRequest, UserMailMagazineLogResponse } from "./MailMagazine_pb.ts";

/**
 * @generated from rpc server.admin.MailMagazineController.GetList
 */
export const getList = {
  localName: "getList",
  name: "GetList",
  kind: MethodKind.Unary,
  I: GetMailMagazineListRequest,
  O: MailMagazinesResponse,
  service: {
    typeName: "server.admin.MailMagazineController"
  }
} as const;

/**
 * @generated from rpc server.admin.MailMagazineController.GetByID
 */
export const getByID = {
  localName: "getByID",
  name: "GetByID",
  kind: MethodKind.Unary,
  I: MailMagazineIDRequest,
  O: MailMagazine,
  service: {
    typeName: "server.admin.MailMagazineController"
  }
} as const;

/**
 * @generated from rpc server.admin.MailMagazineController.GetUserLogList
 */
export const getUserLogList = {
  localName: "getUserLogList",
  name: "GetUserLogList",
  kind: MethodKind.Unary,
  I: UserLogListRequest,
  O: UserMailMagazineLogResponse,
  service: {
    typeName: "server.admin.MailMagazineController"
  }
} as const;

/**
 * @generated from rpc server.admin.MailMagazineController.SaveDraft
 */
export const saveDraft = {
  localName: "saveDraft",
  name: "SaveDraft",
  kind: MethodKind.Unary,
  I: SaveDraftRequest,
  O: MailMagazine,
  service: {
    typeName: "server.admin.MailMagazineController"
  }
} as const;

/**
 * @generated from rpc server.admin.MailMagazineController.Update
 */
export const update = {
  localName: "update",
  name: "Update",
  kind: MethodKind.Unary,
  I: UpdateMailMagazineRequest,
  O: MailMagazine,
  service: {
    typeName: "server.admin.MailMagazineController"
  }
} as const;

/**
 * @generated from rpc server.admin.MailMagazineController.Delete
 */
export const delete$ = {
  localName: "delete",
  name: "Delete",
  kind: MethodKind.Unary,
  I: DeleteMailMagazineRequest,
  O: Empty,
  service: {
    typeName: "server.admin.MailMagazineController"
  }
} as const;

/**
 * @generated from rpc server.admin.MailMagazineController.Send
 */
export const send = {
  localName: "send",
  name: "Send",
  kind: MethodKind.Unary,
  I: SendMailMagazineRequest,
  O: Empty,
  service: {
    typeName: "server.admin.MailMagazineController"
  }
} as const;
