// @generated by protoc-gen-es v1.4.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/user/MyCoupon.proto (package server.user, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coupon } from "../shared/Coupon_pb.ts";

/**
 * @generated from message server.user.CouponIDRequest
 */
export class CouponIDRequest extends Message<CouponIDRequest> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  constructor(data?: PartialMessage<CouponIDRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.user.CouponIDRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CouponIDRequest {
    return new CouponIDRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CouponIDRequest {
    return new CouponIDRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CouponIDRequest {
    return new CouponIDRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CouponIDRequest | PlainMessage<CouponIDRequest> | undefined, b: CouponIDRequest | PlainMessage<CouponIDRequest> | undefined): boolean {
    return proto3.util.equals(CouponIDRequest, a, b);
  }
}

/**
 * @generated from message server.user.MyCouponsResponse
 */
export class MyCouponsResponse extends Message<MyCouponsResponse> {
  /**
   * @generated from field: repeated server.shared.Coupon Coupons = 1;
   */
  Coupons: Coupon[] = [];

  constructor(data?: PartialMessage<MyCouponsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.user.MyCouponsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Coupons", kind: "message", T: Coupon, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MyCouponsResponse {
    return new MyCouponsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MyCouponsResponse {
    return new MyCouponsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MyCouponsResponse {
    return new MyCouponsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MyCouponsResponse | PlainMessage<MyCouponsResponse> | undefined, b: MyCouponsResponse | PlainMessage<MyCouponsResponse> | undefined): boolean {
    return proto3.util.equals(MyCouponsResponse, a, b);
  }
}
