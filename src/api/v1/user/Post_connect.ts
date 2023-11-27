// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file v1/user/Post.proto (package server.user, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { PostRequest, PostResponse, PostsResponse } from "./Post_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service server.user.PostController
 */
export const PostController = {
  typeName: "server.user.PostController",
  methods: {
    /**
     * @generated from rpc server.user.PostController.GetPostByID
     */
    getPostByID: {
      name: "GetPostByID",
      I: PostRequest,
      O: PostResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc server.user.PostController.GetPosts
     */
    getPosts: {
      name: "GetPosts",
      I: Empty,
      O: PostsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

