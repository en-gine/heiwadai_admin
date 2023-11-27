// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file v1/user/UserData.proto (package server.user, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Prefecture } from "../shared/Prefecture_pb.js";

/**
 * @generated from message server.user.UserRegisterRequest
 */
export class UserRegisterRequest extends Message<UserRegisterRequest> {
  /**
   * @generated from field: string FirstName = 1;
   */
  FirstName = "";

  /**
   * @generated from field: string LastName = 2;
   */
  LastName = "";

  /**
   * @generated from field: string FirstNameKana = 3;
   */
  FirstNameKana = "";

  /**
   * @generated from field: string LastNameKana = 4;
   */
  LastNameKana = "";

  /**
   * @generated from field: optional string CompanyName = 5;
   */
  CompanyName?: string;

  /**
   * @generated from field: google.protobuf.Timestamp BirthDate = 6;
   */
  BirthDate?: Timestamp;

  /**
   * @generated from field: optional string ZipCode = 7;
   */
  ZipCode?: string;

  /**
   * @generated from field: server.shared.Prefecture Prefecture = 8;
   */
  Prefecture = Prefecture.Unspecified;

  /**
   * @generated from field: optional string City = 9;
   */
  City?: string;

  /**
   * @generated from field: optional string Address = 10;
   */
  Address?: string;

  /**
   * @generated from field: optional string Tel = 11;
   */
  Tel?: string;

  /**
   * @generated from field: string Mail = 12;
   */
  Mail = "";

  /**
   * @generated from field: bool AcceptMail = 13;
   */
  AcceptMail = false;

  /**
   * @generated from field: bool AcceptTerm = 14;
   */
  AcceptTerm = false;

  constructor(data?: PartialMessage<UserRegisterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.user.UserRegisterRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "FirstName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "LastName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "FirstNameKana", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "LastNameKana", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "CompanyName", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "BirthDate", kind: "message", T: Timestamp },
    { no: 7, name: "ZipCode", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: "Prefecture", kind: "enum", T: proto3.getEnumType(Prefecture) },
    { no: 9, name: "City", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 10, name: "Address", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 11, name: "Tel", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 12, name: "Mail", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "AcceptMail", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "AcceptTerm", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserRegisterRequest {
    return new UserRegisterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserRegisterRequest {
    return new UserRegisterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserRegisterRequest {
    return new UserRegisterRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UserRegisterRequest | PlainMessage<UserRegisterRequest> | undefined, b: UserRegisterRequest | PlainMessage<UserRegisterRequest> | undefined): boolean {
    return proto3.util.equals(UserRegisterRequest, a, b);
  }
}

/**
 * @generated from message server.user.UserUpdateDataRequest
 */
export class UserUpdateDataRequest extends Message<UserUpdateDataRequest> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  /**
   * @generated from field: string FirstName = 2;
   */
  FirstName = "";

  /**
   * @generated from field: string LastName = 3;
   */
  LastName = "";

  /**
   * @generated from field: string FirstNameKana = 4;
   */
  FirstNameKana = "";

  /**
   * @generated from field: string LastNameKana = 5;
   */
  LastNameKana = "";

  /**
   * @generated from field: optional string CompanyName = 6;
   */
  CompanyName?: string;

  /**
   * @generated from field: google.protobuf.Timestamp BirthDate = 7;
   */
  BirthDate?: Timestamp;

  /**
   * @generated from field: optional string ZipCode = 8;
   */
  ZipCode?: string;

  /**
   * @generated from field: server.shared.Prefecture Prefecture = 9;
   */
  Prefecture = Prefecture.Unspecified;

  /**
   * @generated from field: optional string City = 10;
   */
  City?: string;

  /**
   * @generated from field: optional string Address = 11;
   */
  Address?: string;

  /**
   * @generated from field: optional string Tel = 12;
   */
  Tel?: string;

  /**
   * @generated from field: string Mail = 13;
   */
  Mail = "";

  /**
   * @generated from field: bool AcceptMail = 14;
   */
  AcceptMail = false;

  constructor(data?: PartialMessage<UserUpdateDataRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.user.UserUpdateDataRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "FirstName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "LastName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "FirstNameKana", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "LastNameKana", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "CompanyName", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "BirthDate", kind: "message", T: Timestamp },
    { no: 8, name: "ZipCode", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 9, name: "Prefecture", kind: "enum", T: proto3.getEnumType(Prefecture) },
    { no: 10, name: "City", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 11, name: "Address", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 12, name: "Tel", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 13, name: "Mail", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "AcceptMail", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserUpdateDataRequest {
    return new UserUpdateDataRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserUpdateDataRequest {
    return new UserUpdateDataRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserUpdateDataRequest {
    return new UserUpdateDataRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UserUpdateDataRequest | PlainMessage<UserUpdateDataRequest> | undefined, b: UserUpdateDataRequest | PlainMessage<UserUpdateDataRequest> | undefined): boolean {
    return proto3.util.equals(UserUpdateDataRequest, a, b);
  }
}

/**
 * @generated from message server.user.UserDataResponse
 */
export class UserDataResponse extends Message<UserDataResponse> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  /**
   * @generated from field: string FirstName = 2;
   */
  FirstName = "";

  /**
   * @generated from field: string LastName = 3;
   */
  LastName = "";

  /**
   * @generated from field: string FirstNameKana = 4;
   */
  FirstNameKana = "";

  /**
   * @generated from field: string LastNameKana = 5;
   */
  LastNameKana = "";

  /**
   * @generated from field: optional string CompanyName = 6;
   */
  CompanyName?: string;

  /**
   * @generated from field: google.protobuf.Timestamp BirthDate = 7;
   */
  BirthDate?: Timestamp;

  /**
   * @generated from field: optional string ZipCode = 8;
   */
  ZipCode?: string;

  /**
   * @generated from field: server.shared.Prefecture Prefecture = 9;
   */
  Prefecture = Prefecture.Unspecified;

  /**
   * @generated from field: optional string City = 10;
   */
  City?: string;

  /**
   * @generated from field: optional string Address = 11;
   */
  Address?: string;

  /**
   * @generated from field: optional string Tel = 12;
   */
  Tel?: string;

  /**
   * @generated from field: string Mail = 13;
   */
  Mail = "";

  /**
   * @generated from field: bool AcceptMail = 14;
   */
  AcceptMail = false;

  constructor(data?: PartialMessage<UserDataResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.user.UserDataResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "FirstName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "LastName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "FirstNameKana", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "LastNameKana", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "CompanyName", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "BirthDate", kind: "message", T: Timestamp },
    { no: 8, name: "ZipCode", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 9, name: "Prefecture", kind: "enum", T: proto3.getEnumType(Prefecture) },
    { no: 10, name: "City", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 11, name: "Address", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 12, name: "Tel", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 13, name: "Mail", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "AcceptMail", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserDataResponse {
    return new UserDataResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserDataResponse {
    return new UserDataResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserDataResponse {
    return new UserDataResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UserDataResponse | PlainMessage<UserDataResponse> | undefined, b: UserDataResponse | PlainMessage<UserDataResponse> | undefined): boolean {
    return proto3.util.equals(UserDataResponse, a, b);
  }
}

