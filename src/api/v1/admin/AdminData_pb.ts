// @generated by protoc-gen-es v1.4.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/admin/AdminData.proto (package server.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message server.admin.AdminUpdateDataRequest
 */
export class AdminUpdateDataRequest extends Message<AdminUpdateDataRequest> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  /**
   * @generated from field: string Name = 2;
   */
  Name = "";

  /**
   * @generated from field: bool IsActive = 3;
   */
  IsActive = false;

  /**
   * @generated from field: string Mail = 4;
   */
  Mail = "";

  /**
   * @generated from field: string StoreID = 5;
   */
  StoreID = "";

  constructor(data?: PartialMessage<AdminUpdateDataRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.AdminUpdateDataRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "Name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "IsActive", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "Mail", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "StoreID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AdminUpdateDataRequest {
    return new AdminUpdateDataRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AdminUpdateDataRequest {
    return new AdminUpdateDataRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AdminUpdateDataRequest {
    return new AdminUpdateDataRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AdminUpdateDataRequest | PlainMessage<AdminUpdateDataRequest> | undefined, b: AdminUpdateDataRequest | PlainMessage<AdminUpdateDataRequest> | undefined): boolean {
    return proto3.util.equals(AdminUpdateDataRequest, a, b);
  }
}

/**
 * @generated from message server.admin.AdminDataResponse
 */
export class AdminDataResponse extends Message<AdminDataResponse> {
  /**
   * @generated from field: string ID = 1;
   */
  ID = "";

  /**
   * @generated from field: string Name = 2;
   */
  Name = "";

  /**
   * @generated from field: bool IsActive = 3;
   */
  IsActive = false;

  /**
   * @generated from field: string Mail = 4;
   */
  Mail = "";

  /**
   * @generated from field: string StoreID = 5;
   */
  StoreID = "";

  constructor(data?: PartialMessage<AdminDataResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.admin.AdminDataResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "Name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "IsActive", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "Mail", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "StoreID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AdminDataResponse {
    return new AdminDataResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AdminDataResponse {
    return new AdminDataResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AdminDataResponse {
    return new AdminDataResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AdminDataResponse | PlainMessage<AdminDataResponse> | undefined, b: AdminDataResponse | PlainMessage<AdminDataResponse> | undefined): boolean {
    return proto3.util.equals(AdminDataResponse, a, b);
  }
}
