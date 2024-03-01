// @generated by protoc-gen-connect-query v1.1.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/cron/Coupon.proto (package server.cron, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { AffectedCountResponse } from "./Coupon_pb.ts";

/**
 * @generated from rpc server.cron.CronCouponController.BulkIssueBirthdayCoupon
 */
export const bulkIssueBirthdayCoupon = {
  localName: "bulkIssueBirthdayCoupon",
  name: "BulkIssueBirthdayCoupon",
  kind: MethodKind.Unary,
  I: Empty,
  O: AffectedCountResponse,
  service: {
    typeName: "server.cron.CronCouponController"
  }
} as const;
