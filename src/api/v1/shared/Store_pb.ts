// @generated by protoc-gen-es v1.4.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/shared/Store.proto (package server.shared, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message server.shared.Store
 */
export class Store extends Message<Store> {
  /**
   * uuid.UUID
   *
   * @generated from field: string ID = 1;
   */
  ID = "";

  /**
   * @generated from field: string Name = 2;
   */
  Name = "";

  /**
   * @generated from field: optional string BranchName = 3;
   */
  BranchName?: string;

  /**
   * @generated from field: string ZipCode = 4;
   */
  ZipCode = "";

  /**
   * @generated from field: string Address = 5;
   */
  Address = "";

  /**
   * @generated from field: string Tel = 6;
   */
  Tel = "";

  /**
   * @generated from field: string SiteURL = 7;
   */
  SiteURL = "";

  /**
   * @generated from field: string StampImageURL = 8;
   */
  StampImageURL = "";

  /**
   * @generated from field: bool Stayable = 9;
   */
  Stayable = false;

  /**
   * @generated from field: bool IsActive = 10;
   */
  IsActive = false;

  /**
   * uuid.UUID
   *
   * @generated from field: string QRCode = 11;
   */
  QRCode = "";

  /**
   * uuid.UUID
   *
   * @generated from field: string UnLimitedQRCode = 12;
   */
  UnLimitedQRCode = "";

  /**
   * @generated from field: optional server.shared.StayableStoreInfo StayableStoreInfo = 13;
   */
  StayableStoreInfo?: StayableStoreInfo;

  constructor(data?: PartialMessage<Store>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.shared.Store";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "Name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "BranchName", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "ZipCode", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "Address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "Tel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "SiteURL", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "StampImageURL", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "Stayable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "IsActive", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "QRCode", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "UnLimitedQRCode", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "StayableStoreInfo", kind: "message", T: StayableStoreInfo, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Store {
    return new Store().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Store {
    return new Store().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Store {
    return new Store().fromJsonString(jsonString, options);
  }

  static equals(a: Store | PlainMessage<Store> | undefined, b: Store | PlainMessage<Store> | undefined): boolean {
    return proto3.util.equals(Store, a, b);
  }
}

/**
 * @generated from message server.shared.Stores
 */
export class Stores extends Message<Stores> {
  /**
   * @generated from field: repeated server.shared.Store Stores = 1;
   */
  Stores: Store[] = [];

  constructor(data?: PartialMessage<Stores>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.shared.Stores";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Stores", kind: "message", T: Store, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Stores {
    return new Stores().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Stores {
    return new Stores().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Stores {
    return new Stores().fromJsonString(jsonString, options);
  }

  static equals(a: Stores | PlainMessage<Stores> | undefined, b: Stores | PlainMessage<Stores> | undefined): boolean {
    return proto3.util.equals(Stores, a, b);
  }
}

/**
 * @generated from message server.shared.StayableStoreInfo
 */
export class StayableStoreInfo extends Message<StayableStoreInfo> {
  /**
   * @generated from field: string Parking = 1;
   */
  Parking = "";

  /**
   * @generated from field: double Latitude = 2;
   */
  Latitude = 0;

  /**
   * @generated from field: double Longitude = 3;
   */
  Longitude = 0;

  /**
   * @generated from field: string AccessInfo = 4;
   */
  AccessInfo = "";

  /**
   * @generated from field: string RestAPIURL = 5;
   */
  RestAPIURL = "";

  /**
   * @generated from field: string BookingSystemID = 6;
   */
  BookingSystemID = "";

  constructor(data?: PartialMessage<StayableStoreInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.shared.StayableStoreInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Parking", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "Latitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "Longitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "AccessInfo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "RestAPIURL", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "BookingSystemID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StayableStoreInfo {
    return new StayableStoreInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StayableStoreInfo {
    return new StayableStoreInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StayableStoreInfo {
    return new StayableStoreInfo().fromJsonString(jsonString, options);
  }

  static equals(a: StayableStoreInfo | PlainMessage<StayableStoreInfo> | undefined, b: StayableStoreInfo | PlainMessage<StayableStoreInfo> | undefined): boolean {
    return proto3.util.equals(StayableStoreInfo, a, b);
  }
}

/**
 * @generated from message server.shared.StayableStore
 */
export class StayableStore extends Message<StayableStore> {
  /**
   * @generated from field: server.shared.Store Store = 1;
   */
  Store?: Store;

  /**
   * @generated from field: optional server.shared.StayableStoreInfo Info = 2;
   */
  Info?: StayableStoreInfo;

  constructor(data?: PartialMessage<StayableStore>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.shared.StayableStore";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Store", kind: "message", T: Store },
    { no: 2, name: "Info", kind: "message", T: StayableStoreInfo, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StayableStore {
    return new StayableStore().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StayableStore {
    return new StayableStore().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StayableStore {
    return new StayableStore().fromJsonString(jsonString, options);
  }

  static equals(a: StayableStore | PlainMessage<StayableStore> | undefined, b: StayableStore | PlainMessage<StayableStore> | undefined): boolean {
    return proto3.util.equals(StayableStore, a, b);
  }
}

/**
 * @generated from message server.shared.StayableStores
 */
export class StayableStores extends Message<StayableStores> {
  /**
   * @generated from field: repeated server.shared.StayableStore StayableStores = 1;
   */
  StayableStores: StayableStore[] = [];

  constructor(data?: PartialMessage<StayableStores>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "server.shared.StayableStores";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "StayableStores", kind: "message", T: StayableStore, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StayableStores {
    return new StayableStores().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StayableStores {
    return new StayableStores().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StayableStores {
    return new StayableStores().fromJsonString(jsonString, options);
  }

  static equals(a: StayableStores | PlainMessage<StayableStores> | undefined, b: StayableStores | PlainMessage<StayableStores> | undefined): boolean {
    return proto3.util.equals(StayableStores, a, b);
  }
}
