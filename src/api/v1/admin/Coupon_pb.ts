// @generated by protoc-gen-es v1.4.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/admin/Coupon.proto (package server.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { UserAttachedCoupon } from "../shared/Coupon_pb.ts";

/**
 * @generated from message server.admin.CouponIDRequest
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
  static readonly typeName = "server.admin.CouponIDRequest";
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
 * @generated from message server.admin.UserIDRequest
 */
export class UserIDRequest extends Message<UserIDRequest> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  constructor(data?: PartialMessage<UserIDRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.UserIDRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserIDRequest {
    return new UserIDRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserIDRequest {
    return new UserIDRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserIDRequest {
    return new UserIDRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UserIDRequest | PlainMessage<UserIDRequest> | undefined, b: UserIDRequest | PlainMessage<UserIDRequest> | undefined): boolean {
    return proto3.util.equals(UserIDRequest, a, b);
  }
}

/**
 * @generated from message server.admin.CreateCustomCouponRequest
 */
export class CreateCustomCouponRequest extends Message<CreateCustomCouponRequest> {
  /**
   * @generated from field: string Name = 1;
   */
  Name = "";

  /**
   * @generated from field: uint32 DiscountAmount = 2;
   */
  DiscountAmount = 0;

  /**
   * @generated from field: google.protobuf.Timestamp ExpireAt = 3;
   */
  ExpireAt?: Timestamp;

  /**
   * @generated from field: bool IsCombinationable = 4;
   */
  IsCombinationable = false;

  /**
   * @generated from field: repeated string Notices = 7;
   */
  Notices: string[] = [];

  constructor(data?: PartialMessage<CreateCustomCouponRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.CreateCustomCouponRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "DiscountAmount", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "ExpireAt", kind: "message", T: Timestamp },
    { no: 4, name: "IsCombinationable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "Notices", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCustomCouponRequest {
    return new CreateCustomCouponRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCustomCouponRequest {
    return new CreateCustomCouponRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCustomCouponRequest {
    return new CreateCustomCouponRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateCustomCouponRequest | PlainMessage<CreateCustomCouponRequest> | undefined, b: CreateCustomCouponRequest | PlainMessage<CreateCustomCouponRequest> | undefined): boolean {
    return proto3.util.equals(CreateCustomCouponRequest, a, b);
  }
}

/**
 * @generated from message server.admin.AffectedCountResponse
 */
export class AffectedCountResponse extends Message<AffectedCountResponse> {
  /**
   * @generated from field: uint32 AffectedUserCount = 1;
   */
  AffectedUserCount = 0;

  constructor(data?: PartialMessage<AffectedCountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.AffectedCountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "AffectedUserCount", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AffectedCountResponse {
    return new AffectedCountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AffectedCountResponse {
    return new AffectedCountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AffectedCountResponse {
    return new AffectedCountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AffectedCountResponse | PlainMessage<AffectedCountResponse> | undefined, b: AffectedCountResponse | PlainMessage<AffectedCountResponse> | undefined): boolean {
    return proto3.util.equals(AffectedCountResponse, a, b);
  }
}

/**
 * @generated from message server.admin.UserAttachedCouponsResponse
 */
export class UserAttachedCouponsResponse extends Message<UserAttachedCouponsResponse> {
  /**
   * @generated from field: repeated server.shared.UserAttachedCoupon UserAttachedCoupons = 1;
   */
  UserAttachedCoupons: UserAttachedCoupon[] = [];

  constructor(data?: PartialMessage<UserAttachedCouponsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.UserAttachedCouponsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "UserAttachedCoupons", kind: "message", T: UserAttachedCoupon, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserAttachedCouponsResponse {
    return new UserAttachedCouponsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserAttachedCouponsResponse {
    return new UserAttachedCouponsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserAttachedCouponsResponse {
    return new UserAttachedCouponsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UserAttachedCouponsResponse | PlainMessage<UserAttachedCouponsResponse> | undefined, b: UserAttachedCouponsResponse | PlainMessage<UserAttachedCouponsResponse> | undefined): boolean {
    return proto3.util.equals(UserAttachedCouponsResponse, a, b);
  }
}
