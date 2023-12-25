// @generated by protoc-gen-connect-query v1.1.2 with parameter "target=ts,import_extension=.ts"
// @generated from file v1/user/Auth.proto (package server.user, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { RefreshTokenRequest, UpdateEmailRequest, UpdatePasswordRequest, UserAuthTokenResponse } from "./Auth_pb.ts";

/**
 * ログアウト
 *
 * @generated from rpc server.user.AuthController.SignOut
 */
export const signOut = {
  localName: "signOut",
  name: "SignOut",
  kind: MethodKind.Unary,
  I: Empty,
  O: Empty,
  service: {
    typeName: "server.user.AuthController"
  }
} as const;

/**
 * リフレッシュトークンを使ってアクセストークンを更新する（通常は通信ヘッダーを用いて自動でリフレッシュしている）
 *
 * @generated from rpc server.user.AuthController.Refresh
 */
export const refresh = {
  localName: "refresh",
  name: "Refresh",
  kind: MethodKind.Unary,
  I: RefreshTokenRequest,
  O: UserAuthTokenResponse,
  service: {
    typeName: "server.user.AuthController"
  }
} as const;

/**
 * パスワードアップデート
 *
 * @generated from rpc server.user.AuthController.UpdatePassword
 */
export const updatePassword = {
  localName: "updatePassword",
  name: "UpdatePassword",
  kind: MethodKind.Unary,
  I: UpdatePasswordRequest,
  O: Empty,
  service: {
    typeName: "server.user.AuthController"
  }
} as const;

/**
 * メールアドレス更新（認証メールが飛ぶ）
 *
 * @generated from rpc server.user.AuthController.UpdateEmail
 */
export const updateEmail = {
  localName: "updateEmail",
  name: "UpdateEmail",
  kind: MethodKind.Unary,
  I: UpdateEmailRequest,
  O: Empty,
  service: {
    typeName: "server.user.AuthController"
  }
} as const;
