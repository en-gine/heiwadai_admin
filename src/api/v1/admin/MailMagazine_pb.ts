// @generated by protoc-gen-es v1.6.0 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/admin/MailMagazine.proto (package server.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Pager, PageResponse } from "../shared/Pager_pb.ts";
import { Prefecture } from "../shared/Prefecture_pb.ts";

/**
 * @generated from enum server.admin.MailMagazineStatus
 */
export enum MailMagazineStatus {
  /**
   * @generated from enum value: MailMagazineDraft = 0;
   */
  MailMagazineDraft = 0,

  /**
   * @generated from enum value: MailMagazineSaved = 1;
   */
  MailMagazineSaved = 1,

  /**
   * @generated from enum value: MailMagazineSentCompleted = 2;
   */
  MailMagazineSentCompleted = 2,

  /**
   * @generated from enum value: MailMagazineSentUnCompleted = 3;
   */
  MailMagazineSentUnCompleted = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(MailMagazineStatus)
proto3.util.setEnumType(MailMagazineStatus, "server.admin.MailMagazineStatus", [
  { no: 0, name: "MailMagazineDraft" },
  { no: 1, name: "MailMagazineSaved" },
  { no: 2, name: "MailMagazineSentCompleted" },
  { no: 3, name: "MailMagazineSentUnCompleted" },
]);

/**
 * @generated from message server.admin.GetMailMagazineListRequest
 */
export class GetMailMagazineListRequest extends Message<GetMailMagazineListRequest> {
  /**
   * @generated from field: server.shared.Pager Pager = 1;
   */
  Pager?: Pager;

  constructor(data?: PartialMessage<GetMailMagazineListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.GetMailMagazineListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Pager", kind: "message", T: Pager },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMailMagazineListRequest {
    return new GetMailMagazineListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMailMagazineListRequest {
    return new GetMailMagazineListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMailMagazineListRequest {
    return new GetMailMagazineListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetMailMagazineListRequest | PlainMessage<GetMailMagazineListRequest> | undefined, b: GetMailMagazineListRequest | PlainMessage<GetMailMagazineListRequest> | undefined): boolean {
    return proto3.util.equals(GetMailMagazineListRequest, a, b);
  }
}

/**
 * @generated from message server.admin.MailMagazineIDRequest
 */
export class MailMagazineIDRequest extends Message<MailMagazineIDRequest> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  constructor(data?: PartialMessage<MailMagazineIDRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.MailMagazineIDRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MailMagazineIDRequest {
    return new MailMagazineIDRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MailMagazineIDRequest {
    return new MailMagazineIDRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MailMagazineIDRequest {
    return new MailMagazineIDRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MailMagazineIDRequest | PlainMessage<MailMagazineIDRequest> | undefined, b: MailMagazineIDRequest | PlainMessage<MailMagazineIDRequest> | undefined): boolean {
    return proto3.util.equals(MailMagazineIDRequest, a, b);
  }
}

/**
 * @generated from message server.admin.MailMagazine
 */
export class MailMagazine extends Message<MailMagazine> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  /**
   * @generated from field: string Title = 2;
   */
  Title = "";

  /**
   * @generated from field: string Content = 3;
   */
  Content = "";

  /**
   * @generated from field: string AuthorID = 4;
   */
  AuthorID = "";

  /**
   * @generated from field: repeated server.shared.Prefecture TargetPrefecture = 5;
   */
  TargetPrefecture: Prefecture[] = [];

  /**
   * @generated from field: server.admin.MailMagazineStatus MailMagazineStatus = 6;
   */
  MailMagazineStatus = MailMagazineStatus.MailMagazineDraft;

  /**
   * @generated from field: int32 UnsentCount = 7;
   */
  UnsentCount = 0;

  /**
   * @generated from field: int32 SentCount = 8;
   */
  SentCount = 0;

  /**
   * @generated from field: optional google.protobuf.Timestamp SentAt = 9;
   */
  SentAt?: Timestamp;

  /**
   * @generated from field: optional google.protobuf.Timestamp CreateAt = 10;
   */
  CreateAt?: Timestamp;

  constructor(data?: PartialMessage<MailMagazine>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.MailMagazine";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "Title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "Content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "AuthorID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "TargetPrefecture", kind: "enum", T: proto3.getEnumType(Prefecture), repeated: true },
    { no: 6, name: "MailMagazineStatus", kind: "enum", T: proto3.getEnumType(MailMagazineStatus) },
    { no: 7, name: "UnsentCount", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "SentCount", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 9, name: "SentAt", kind: "message", T: Timestamp, opt: true },
    { no: 10, name: "CreateAt", kind: "message", T: Timestamp, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MailMagazine {
    return new MailMagazine().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MailMagazine {
    return new MailMagazine().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MailMagazine {
    return new MailMagazine().fromJsonString(jsonString, options);
  }

  static equals(a: MailMagazine | PlainMessage<MailMagazine> | undefined, b: MailMagazine | PlainMessage<MailMagazine> | undefined): boolean {
    return proto3.util.equals(MailMagazine, a, b);
  }
}

/**
 * @generated from message server.admin.MailMagazinesResponse
 */
export class MailMagazinesResponse extends Message<MailMagazinesResponse> {
  /**
   * @generated from field: repeated server.admin.MailMagazine MailMagazines = 1;
   */
  MailMagazines: MailMagazine[] = [];

  /**
   * @generated from field: server.shared.PageResponse PageResponse = 2;
   */
  PageResponse?: PageResponse;

  constructor(data?: PartialMessage<MailMagazinesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.MailMagazinesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "MailMagazines", kind: "message", T: MailMagazine, repeated: true },
    { no: 2, name: "PageResponse", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MailMagazinesResponse {
    return new MailMagazinesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MailMagazinesResponse {
    return new MailMagazinesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MailMagazinesResponse {
    return new MailMagazinesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MailMagazinesResponse | PlainMessage<MailMagazinesResponse> | undefined, b: MailMagazinesResponse | PlainMessage<MailMagazinesResponse> | undefined): boolean {
    return proto3.util.equals(MailMagazinesResponse, a, b);
  }
}

/**
 * @generated from message server.admin.SaveDraftRequest
 */
export class SaveDraftRequest extends Message<SaveDraftRequest> {
  /**
   * @generated from field: string Title = 1;
   */
  Title = "";

  /**
   * @generated from field: string Content = 2;
   */
  Content = "";

  /**
   * @generated from field: repeated server.shared.Prefecture TargetPrefectures = 3;
   */
  TargetPrefectures: Prefecture[] = [];

  constructor(data?: PartialMessage<SaveDraftRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.SaveDraftRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "Content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "TargetPrefectures", kind: "enum", T: proto3.getEnumType(Prefecture), repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SaveDraftRequest {
    return new SaveDraftRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SaveDraftRequest {
    return new SaveDraftRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SaveDraftRequest {
    return new SaveDraftRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SaveDraftRequest | PlainMessage<SaveDraftRequest> | undefined, b: SaveDraftRequest | PlainMessage<SaveDraftRequest> | undefined): boolean {
    return proto3.util.equals(SaveDraftRequest, a, b);
  }
}

/**
 * @generated from message server.admin.UpdateMailMagazineRequest
 */
export class UpdateMailMagazineRequest extends Message<UpdateMailMagazineRequest> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  /**
   * @generated from field: optional string Title = 2;
   */
  Title?: string;

  /**
   * @generated from field: optional string Content = 3;
   */
  Content?: string;

  /**
   * @generated from field: repeated server.shared.Prefecture TargetPrefectures = 5;
   */
  TargetPrefectures: Prefecture[] = [];

  constructor(data?: PartialMessage<UpdateMailMagazineRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.UpdateMailMagazineRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "Title", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "Content", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "TargetPrefectures", kind: "enum", T: proto3.getEnumType(Prefecture), repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateMailMagazineRequest {
    return new UpdateMailMagazineRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateMailMagazineRequest {
    return new UpdateMailMagazineRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateMailMagazineRequest {
    return new UpdateMailMagazineRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateMailMagazineRequest | PlainMessage<UpdateMailMagazineRequest> | undefined, b: UpdateMailMagazineRequest | PlainMessage<UpdateMailMagazineRequest> | undefined): boolean {
    return proto3.util.equals(UpdateMailMagazineRequest, a, b);
  }
}

/**
 * @generated from message server.admin.DeleteMailMagazineRequest
 */
export class DeleteMailMagazineRequest extends Message<DeleteMailMagazineRequest> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  constructor(data?: PartialMessage<DeleteMailMagazineRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.DeleteMailMagazineRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteMailMagazineRequest {
    return new DeleteMailMagazineRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteMailMagazineRequest {
    return new DeleteMailMagazineRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteMailMagazineRequest {
    return new DeleteMailMagazineRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteMailMagazineRequest | PlainMessage<DeleteMailMagazineRequest> | undefined, b: DeleteMailMagazineRequest | PlainMessage<DeleteMailMagazineRequest> | undefined): boolean {
    return proto3.util.equals(DeleteMailMagazineRequest, a, b);
  }
}

/**
 * @generated from message server.admin.SendMailMagazineRequest
 */
export class SendMailMagazineRequest extends Message<SendMailMagazineRequest> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  constructor(data?: PartialMessage<SendMailMagazineRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.SendMailMagazineRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendMailMagazineRequest {
    return new SendMailMagazineRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendMailMagazineRequest {
    return new SendMailMagazineRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendMailMagazineRequest {
    return new SendMailMagazineRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SendMailMagazineRequest | PlainMessage<SendMailMagazineRequest> | undefined, b: SendMailMagazineRequest | PlainMessage<SendMailMagazineRequest> | undefined): boolean {
    return proto3.util.equals(SendMailMagazineRequest, a, b);
  }
}

/**
 * @generated from message server.admin.UserLogListRequest
 */
export class UserLogListRequest extends Message<UserLogListRequest> {
  /**
   * @generated from field: string UserID = 1;
   */
  UserID = "";

  /**
   * @generated from field: server.shared.Pager Pager = 2;
   */
  Pager?: Pager;

  constructor(data?: PartialMessage<UserLogListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.UserLogListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "UserID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "Pager", kind: "message", T: Pager },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserLogListRequest {
    return new UserLogListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserLogListRequest {
    return new UserLogListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserLogListRequest {
    return new UserLogListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UserLogListRequest | PlainMessage<UserLogListRequest> | undefined, b: UserLogListRequest | PlainMessage<UserLogListRequest> | undefined): boolean {
    return proto3.util.equals(UserLogListRequest, a, b);
  }
}

/**
 * @generated from message server.admin.UserMailMagazineLog
 */
export class UserMailMagazineLog extends Message<UserMailMagazineLog> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  /**
   * @generated from field: string MailMagazineID = 2;
   */
  MailMagazineID = "";

  /**
   * @generated from field: string UserID = 3;
   */
  UserID = "";

  /**
   * @generated from field: string Title = 4;
   */
  Title = "";

  /**
   * @generated from field: optional google.protobuf.Timestamp SentAt = 5;
   */
  SentAt?: Timestamp;

  constructor(data?: PartialMessage<UserMailMagazineLog>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.UserMailMagazineLog";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "MailMagazineID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "UserID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "Title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "SentAt", kind: "message", T: Timestamp, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserMailMagazineLog {
    return new UserMailMagazineLog().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserMailMagazineLog {
    return new UserMailMagazineLog().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserMailMagazineLog {
    return new UserMailMagazineLog().fromJsonString(jsonString, options);
  }

  static equals(a: UserMailMagazineLog | PlainMessage<UserMailMagazineLog> | undefined, b: UserMailMagazineLog | PlainMessage<UserMailMagazineLog> | undefined): boolean {
    return proto3.util.equals(UserMailMagazineLog, a, b);
  }
}

/**
 * @generated from message server.admin.UserMailMagazineLogResponse
 */
export class UserMailMagazineLogResponse extends Message<UserMailMagazineLogResponse> {
  /**
   * @generated from field: repeated server.admin.UserMailMagazineLog UserLogs = 1;
   */
  UserLogs: UserMailMagazineLog[] = [];

  /**
   * @generated from field: server.shared.PageResponse PageResponse = 2;
   */
  PageResponse?: PageResponse;

  constructor(data?: PartialMessage<UserMailMagazineLogResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.UserMailMagazineLogResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "UserLogs", kind: "message", T: UserMailMagazineLog, repeated: true },
    { no: 2, name: "PageResponse", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserMailMagazineLogResponse {
    return new UserMailMagazineLogResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserMailMagazineLogResponse {
    return new UserMailMagazineLogResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserMailMagazineLogResponse {
    return new UserMailMagazineLogResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UserMailMagazineLogResponse | PlainMessage<UserMailMagazineLogResponse> | undefined, b: UserMailMagazineLogResponse | PlainMessage<UserMailMagazineLogResponse> | undefined): boolean {
    return proto3.util.equals(UserMailMagazineLogResponse, a, b);
  }
}

