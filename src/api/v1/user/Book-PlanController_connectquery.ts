// @generated by protoc-gen-connect-query v1.1.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/user/Book.proto (package server.user, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { PlanDetailRequest, PlanSearchRequest, PlanStayDetailResponse, SearchPlanResponse } from "./Book_pb.ts";

/**
 * @generated from rpc server.user.PlanController.Search
 */
export const search = {
  localName: "search",
  name: "Search",
  kind: MethodKind.Unary,
  I: PlanSearchRequest,
  O: SearchPlanResponse,
  service: {
    typeName: "server.user.PlanController"
  }
} as const;

/**
 * @generated from rpc server.user.PlanController.GetDetail
 */
export const getDetail = {
  localName: "getDetail",
  name: "GetDetail",
  kind: MethodKind.Unary,
  I: PlanDetailRequest,
  O: PlanStayDetailResponse,
  service: {
    typeName: "server.user.PlanController"
  }
} as const;
