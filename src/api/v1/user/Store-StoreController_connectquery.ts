// @generated by protoc-gen-connect-query v1.1.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/user/Store.proto (package server.user, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { StoreIDRequest } from "./Store_pb.ts";
import { StayableStore, StayableStores, Store, Stores } from "../shared/Store_pb.ts";

/**
 * 店舗情報の詳細を取得
 *
 * @generated from rpc server.user.StoreController.GetByID
 */
export const getByID = {
  localName: "getByID",
  name: "GetByID",
  kind: MethodKind.Unary,
  I: StoreIDRequest,
  O: Store,
  service: {
    typeName: "server.user.StoreController"
  }
} as const;

/**
 * 店舗情報の一覧を取得
 *
 * @generated from rpc server.user.StoreController.GetAll
 */
export const getAll = {
  localName: "getAll",
  name: "GetAll",
  kind: MethodKind.Unary,
  I: Empty,
  O: Stores,
  service: {
    typeName: "server.user.StoreController"
  }
} as const;

/**
 * ホテル（宿泊可能な店舗）の一覧を取得
 *
 * @generated from rpc server.user.StoreController.GetStayables
 */
export const getStayables = {
  localName: "getStayables",
  name: "GetStayables",
  kind: MethodKind.Unary,
  I: Empty,
  O: StayableStores,
  service: {
    typeName: "server.user.StoreController"
  }
} as const;

/**
 * ホテル（宿泊可能な店舗）の詳細を取得
 *
 * @generated from rpc server.user.StoreController.GetStayableByID
 */
export const getStayableByID = {
  localName: "getStayableByID",
  name: "GetStayableByID",
  kind: MethodKind.Unary,
  I: StoreIDRequest,
  O: StayableStore,
  service: {
    typeName: "server.user.StoreController"
  }
} as const;
