// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file v1/user/Store.proto (package server.user, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message server.user.SoreIDRequest
 */
export class SoreIDRequest extends Message<SoreIDRequest> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  constructor(data?: PartialMessage<SoreIDRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.user.SoreIDRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SoreIDRequest {
    return new SoreIDRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SoreIDRequest {
    return new SoreIDRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SoreIDRequest {
    return new SoreIDRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SoreIDRequest | PlainMessage<SoreIDRequest> | undefined, b: SoreIDRequest | PlainMessage<SoreIDRequest> | undefined): boolean {
    return proto3.util.equals(SoreIDRequest, a, b);
  }
}

