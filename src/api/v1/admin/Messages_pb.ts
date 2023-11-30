// @generated by protoc-gen-es v1.4.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/admin/Messages.proto (package server.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Pager } from "../shared/Pager_pb.ts";

/**
 * @generated from message server.admin.MessageIDRequest
 */
export class MessageIDRequest extends Message<MessageIDRequest> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  constructor(data?: PartialMessage<MessageIDRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.MessageIDRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MessageIDRequest {
    return new MessageIDRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MessageIDRequest {
    return new MessageIDRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MessageIDRequest {
    return new MessageIDRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MessageIDRequest | PlainMessage<MessageIDRequest> | undefined, b: MessageIDRequest | PlainMessage<MessageIDRequest> | undefined): boolean {
    return proto3.util.equals(MessageIDRequest, a, b);
  }
}

/**
 * @generated from message server.admin.MessagesResponse
 */
export class MessagesResponse extends Message<MessagesResponse> {
  /**
   * @generated from field: repeated server.admin.MessageResponse messages = 1;
   */
  messages: MessageResponse[] = [];

  constructor(data?: PartialMessage<MessagesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.MessagesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "messages", kind: "message", T: MessageResponse, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MessagesResponse {
    return new MessagesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MessagesResponse {
    return new MessagesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MessagesResponse {
    return new MessagesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MessagesResponse | PlainMessage<MessagesResponse> | undefined, b: MessagesResponse | PlainMessage<MessagesResponse> | undefined): boolean {
    return proto3.util.equals(MessagesResponse, a, b);
  }
}

/**
 * @generated from message server.admin.GetMessageRequest
 */
export class GetMessageRequest extends Message<GetMessageRequest> {
  /**
   * @generated from field: server.shared.Pager Pager = 1;
   */
  Pager?: Pager;

  constructor(data?: PartialMessage<GetMessageRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.GetMessageRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Pager", kind: "message", T: Pager },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMessageRequest {
    return new GetMessageRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMessageRequest {
    return new GetMessageRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMessageRequest {
    return new GetMessageRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetMessageRequest | PlainMessage<GetMessageRequest> | undefined, b: GetMessageRequest | PlainMessage<GetMessageRequest> | undefined): boolean {
    return proto3.util.equals(GetMessageRequest, a, b);
  }
}

/**
 * @generated from message server.admin.MessageCreateRequest
 */
export class MessageCreateRequest extends Message<MessageCreateRequest> {
  /**
   * @generated from field: string Title = 1;
   */
  Title = "";

  /**
   * @generated from field: string Content = 2;
   */
  Content = "";

  /**
   * @generated from field: google.protobuf.Timestamp DisplayDate = 5;
   */
  DisplayDate?: Timestamp;

  constructor(data?: PartialMessage<MessageCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.MessageCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "Content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "DisplayDate", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MessageCreateRequest {
    return new MessageCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MessageCreateRequest {
    return new MessageCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MessageCreateRequest {
    return new MessageCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MessageCreateRequest | PlainMessage<MessageCreateRequest> | undefined, b: MessageCreateRequest | PlainMessage<MessageCreateRequest> | undefined): boolean {
    return proto3.util.equals(MessageCreateRequest, a, b);
  }
}

/**
 * @generated from message server.admin.MessageUpdateRequest
 */
export class MessageUpdateRequest extends Message<MessageUpdateRequest> {
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
   * @generated from field: optional google.protobuf.Timestamp DisplayDate = 4;
   */
  DisplayDate?: Timestamp;

  constructor(data?: PartialMessage<MessageUpdateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.MessageUpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "Title", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "Content", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "DisplayDate", kind: "message", T: Timestamp, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MessageUpdateRequest {
    return new MessageUpdateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MessageUpdateRequest {
    return new MessageUpdateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MessageUpdateRequest {
    return new MessageUpdateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MessageUpdateRequest | PlainMessage<MessageUpdateRequest> | undefined, b: MessageUpdateRequest | PlainMessage<MessageUpdateRequest> | undefined): boolean {
    return proto3.util.equals(MessageUpdateRequest, a, b);
  }
}

/**
 * @generated from message server.admin.MessageResponse
 */
export class MessageResponse extends Message<MessageResponse> {
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
   * @generated from field: google.protobuf.Timestamp DisplayDate = 5;
   */
  DisplayDate?: Timestamp;

  constructor(data?: PartialMessage<MessageResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.MessageResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "Title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "Content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "AuthorID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "DisplayDate", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MessageResponse {
    return new MessageResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MessageResponse {
    return new MessageResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MessageResponse {
    return new MessageResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MessageResponse | PlainMessage<MessageResponse> | undefined, b: MessageResponse | PlainMessage<MessageResponse> | undefined): boolean {
    return proto3.util.equals(MessageResponse, a, b);
  }
}
