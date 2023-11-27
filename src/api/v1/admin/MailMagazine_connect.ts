// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file v1/admin/MailMagazine.proto (package server.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateDraftRequest, DeleteMailMagazineRequest, GetMailMagazineListRequest, MailMagazine, MailMagazinesResponse, SendMailMagazineRequest, UpdateMailMagazineRequest } from "./MailMagazine_pb.js";
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
     * @generated from rpc server.admin.MailMagazineController.CreateDraft
     */
    createDraft: {
      name: "CreateDraft",
      I: CreateDraftRequest,
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

