// @generated by protoc-gen-es v1.6.0 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/admin/UserData.proto (package server.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { UserDataResponse as UserDataResponse$1, UserUpdateDataRequest as UserUpdateDataRequest$1 } from "../user/UserData_pb.ts";
import { Pager, PageResponse } from "../shared/Pager_pb.ts";
import { Prefecture } from "../shared/Prefecture_pb.ts";

/**
 * @generated from message server.admin.UserUpdateDataRequest
 */
export class UserUpdateDataRequest extends Message<UserUpdateDataRequest> {
  /**
   * @generated from field: server.user.UserUpdateDataRequest User = 1;
   */
  User?: UserUpdateDataRequest$1;

  /**
   * @generated from field: string InnerNote = 2;
   */
  InnerNote = "";

  /**
   * @generated from field: bool IsBlackCustomer = 3;
   */
  IsBlackCustomer = false;

  constructor(data?: PartialMessage<UserUpdateDataRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.UserUpdateDataRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "User", kind: "message", T: UserUpdateDataRequest$1 },
    { no: 2, name: "InnerNote", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "IsBlackCustomer", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
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
 * @generated from message server.admin.UserDataResponse
 */
export class UserDataResponse extends Message<UserDataResponse> {
  /**
   * @generated from field: server.user.UserDataResponse User = 1;
   */
  User?: UserDataResponse$1;

  /**
   * @generated from field: string InnerNote = 2;
   */
  InnerNote = "";

  /**
   * @generated from field: bool IsBlackCustomer = 3;
   */
  IsBlackCustomer = false;

  constructor(data?: PartialMessage<UserDataResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.UserDataResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "User", kind: "message", T: UserDataResponse$1 },
    { no: 2, name: "InnerNote", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "IsBlackCustomer", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
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

/**
 * @generated from message server.admin.UserWithCheckIn
 */
export class UserWithCheckIn extends Message<UserWithCheckIn> {
  /**
   * @generated from field: server.user.UserDataResponse User = 1;
   */
  User?: UserDataResponse$1;

  /**
   * @generated from field: optional google.protobuf.Timestamp LastCheckinAt = 2;
   */
  LastCheckinAt?: Timestamp;

  constructor(data?: PartialMessage<UserWithCheckIn>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.UserWithCheckIn";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "User", kind: "message", T: UserDataResponse$1 },
    { no: 2, name: "LastCheckinAt", kind: "message", T: Timestamp, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserWithCheckIn {
    return new UserWithCheckIn().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserWithCheckIn {
    return new UserWithCheckIn().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserWithCheckIn {
    return new UserWithCheckIn().fromJsonString(jsonString, options);
  }

  static equals(a: UserWithCheckIn | PlainMessage<UserWithCheckIn> | undefined, b: UserWithCheckIn | PlainMessage<UserWithCheckIn> | undefined): boolean {
    return proto3.util.equals(UserWithCheckIn, a, b);
  }
}

/**
 * @generated from message server.admin.UserListResponse
 */
export class UserListResponse extends Message<UserListResponse> {
  /**
   * @generated from field: repeated server.admin.UserWithCheckIn Users = 1;
   */
  Users: UserWithCheckIn[] = [];

  /**
   * @generated from field: server.shared.PageResponse PageResponse = 3;
   */
  PageResponse?: PageResponse;

  constructor(data?: PartialMessage<UserListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.UserListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Users", kind: "message", T: UserWithCheckIn, repeated: true },
    { no: 3, name: "PageResponse", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserListResponse {
    return new UserListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserListResponse {
    return new UserListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserListResponse {
    return new UserListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UserListResponse | PlainMessage<UserListResponse> | undefined, b: UserListResponse | PlainMessage<UserListResponse> | undefined): boolean {
    return proto3.util.equals(UserListResponse, a, b);
  }
}

/**
 * @generated from message server.admin.UserGetIDRequest
 */
export class UserGetIDRequest extends Message<UserGetIDRequest> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  constructor(data?: PartialMessage<UserGetIDRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.UserGetIDRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserGetIDRequest {
    return new UserGetIDRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserGetIDRequest {
    return new UserGetIDRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserGetIDRequest {
    return new UserGetIDRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UserGetIDRequest | PlainMessage<UserGetIDRequest> | undefined, b: UserGetIDRequest | PlainMessage<UserGetIDRequest> | undefined): boolean {
    return proto3.util.equals(UserGetIDRequest, a, b);
  }
}

/**
 * @generated from message server.admin.UserDeleteRequest
 */
export class UserDeleteRequest extends Message<UserDeleteRequest> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  constructor(data?: PartialMessage<UserDeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.UserDeleteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserDeleteRequest {
    return new UserDeleteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserDeleteRequest {
    return new UserDeleteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserDeleteRequest {
    return new UserDeleteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UserDeleteRequest | PlainMessage<UserDeleteRequest> | undefined, b: UserDeleteRequest | PlainMessage<UserDeleteRequest> | undefined): boolean {
    return proto3.util.equals(UserDeleteRequest, a, b);
  }
}

/**
 * @generated from message server.admin.SearchFilter
 */
export class SearchFilter extends Message<SearchFilter> {
  /**
   * @generated from field: optional string LastName = 1;
   */
  LastName?: string;

  /**
   * @generated from field: optional string FirstName = 2;
   */
  FirstName?: string;

  /**
   * @generated from field: optional string LastNameKana = 3;
   */
  LastNameKana?: string;

  /**
   * @generated from field: optional string FirstNameKana = 4;
   */
  FirstNameKana?: string;

  /**
   * @generated from field: optional server.shared.Prefecture Prefecture = 5;
   */
  Prefecture?: Prefecture;

  constructor(data?: PartialMessage<SearchFilter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.SearchFilter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "LastName", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "FirstName", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "LastNameKana", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "FirstNameKana", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "Prefecture", kind: "enum", T: proto3.getEnumType(Prefecture), opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchFilter {
    return new SearchFilter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchFilter {
    return new SearchFilter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchFilter {
    return new SearchFilter().fromJsonString(jsonString, options);
  }

  static equals(a: SearchFilter | PlainMessage<SearchFilter> | undefined, b: SearchFilter | PlainMessage<SearchFilter> | undefined): boolean {
    return proto3.util.equals(SearchFilter, a, b);
  }
}

/**
 * @generated from message server.admin.UserListFilterRequest
 */
export class UserListFilterRequest extends Message<UserListFilterRequest> {
  /**
   * @generated from field: server.admin.SearchFilter Search = 1;
   */
  Search?: SearchFilter;

  /**
   * @generated from field: server.shared.Pager Pager = 2;
   */
  Pager?: Pager;

  constructor(data?: PartialMessage<UserListFilterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.UserListFilterRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Search", kind: "message", T: SearchFilter },
    { no: 2, name: "Pager", kind: "message", T: Pager },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserListFilterRequest {
    return new UserListFilterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserListFilterRequest {
    return new UserListFilterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserListFilterRequest {
    return new UserListFilterRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UserListFilterRequest | PlainMessage<UserListFilterRequest> | undefined, b: UserListFilterRequest | PlainMessage<UserListFilterRequest> | undefined): boolean {
    return proto3.util.equals(UserListFilterRequest, a, b);
  }
}

