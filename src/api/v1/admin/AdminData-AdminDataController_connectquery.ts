// @generated by protoc-gen-connect-query v1.1.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/admin/AdminData.proto (package server.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { AdminDataResponse, AdminUpdateDataRequest } from "./AdminData_pb.ts";

/**
 * @generated from rpc server.admin.AdminDataController.Update
 */
export const update = {
  localName: "update",
  name: "Update",
  kind: MethodKind.Unary,
  I: AdminUpdateDataRequest,
  O: AdminDataResponse,
  service: {
    typeName: "server.admin.AdminDataController"
  }
} as const;