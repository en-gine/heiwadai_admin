// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/admin/MailMagazine.proto (package server.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteMailMagazineRequest, GetMailMagazineListRequest, MailMagazine, MailMagazineIDRequest, MailMagazinesResponse, SaveDraftRequest, SendMailMagazineRequest, UpdateMailMagazineRequest, UserLogListRequest, UserMailMagazineLogResponse } from "./MailMagazine_pb.ts";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service server.admin.MailMagazineController
 */
export const MailMagazineController = {
  typeName: "server.admin.MailMagazineController",
  methods: {
    /**
     * @generated from rpc server.admin.MailMagazineController.GetList
     */
    getList: {
      name: "GetList",
      I: GetMailMagazineListRequest,
      O: MailMagazinesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc server.admin.MailMagazineController.GetByID
     */
    getByID: {
      name: "GetByID",
      I: MailMagazineIDRequest,
      O: MailMagazine,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc server.admin.MailMagazineController.GetUserLogList
     */
    getUserLogList: {
      name: "GetUserLogList",
      I: UserLogListRequest,
      O: UserMailMagazineLogResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc server.admin.MailMagazineController.SaveDraft
     */
    saveDraft: {
      name: "SaveDraft",
      I: SaveDraftRequest,
      O: MailMagazine,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc server.admin.MailMagazineController.Update
     */
    update: {
      name: "Update",
      I: UpdateMailMagazineRequest,
      O: MailMagazine,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc server.admin.MailMagazineController.Delete
     */
    delete: {
      name: "Delete",
      I: DeleteMailMagazineRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc server.admin.MailMagazineController.Send
     */
    send: {
      name: "Send",
      I: SendMailMagazineRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
  }
} as const;

