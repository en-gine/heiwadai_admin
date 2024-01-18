// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/admin/Coupon.proto (package server.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AffectedCountResponse, CouponIDRequest, CouponListResponse, CreateCustomCouponRequest, SaveCustomCouponRequest, UserAttachedCouponsResponse, UserCouponRequest } from "./Coupon_pb.ts";
import { Empty, MethodKind } from "@bufbuild/protobuf";
import { Coupon } from "../shared/Coupon_pb.ts";
import { Pager } from "../shared/Pager_pb.ts";

/**
 * @generated from service server.admin.AdminCouponController
 */
export const AdminCouponController = {
  typeName: "server.admin.AdminCouponController",
  methods: {
    /**
     * @generated from rpc server.admin.AdminCouponController.GetUserCouponList
     */
    getUserCouponList: {
      name: "GetUserCouponList",
      I: UserCouponRequest,
      O: UserAttachedCouponsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc server.admin.AdminCouponController.CreateCustomCoupon
     */
    createCustomCoupon: {
      name: "CreateCustomCoupon",
      I: CreateCustomCouponRequest,
      O: Coupon,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc server.admin.AdminCouponController.SaveCustomCoupon
     */
    saveCustomCoupon: {
      name: "SaveCustomCoupon",
      I: SaveCustomCouponRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc server.admin.AdminCouponController.GetCustomCouponByID
     */
    getCustomCouponByID: {
      name: "GetCustomCouponByID",
      I: CouponIDRequest,
      O: Coupon,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc server.admin.AdminCouponController.GetCustomCouponList
     */
    getCustomCouponList: {
      name: "GetCustomCouponList",
      I: Pager,
      O: CouponListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc server.admin.AdminCouponController.AttachCustomCouponToAllUser
     */
    attachCustomCouponToAllUser: {
      name: "AttachCustomCouponToAllUser",
      I: CouponIDRequest,
      O: AffectedCountResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

