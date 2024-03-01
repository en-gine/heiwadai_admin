// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/cron/Coupon.proto (package server.cron, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { AffectedCountResponse } from "./Coupon_pb.ts";

/**
 * @generated from service server.cron.CronCouponController
 */
export const CronCouponController = {
  typeName: "server.cron.CronCouponController",
  methods: {
    /**
     * @generated from rpc server.cron.CronCouponController.BulkIssueBirthdayCoupon
     */
    bulkIssueBirthdayCoupon: {
      name: "BulkIssueBirthdayCoupon",
      I: Empty,
      O: AffectedCountResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

