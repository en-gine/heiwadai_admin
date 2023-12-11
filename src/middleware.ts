import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { isAuthenticatied } from "@/lib/grpc/serverFetcher"
import { serverFetcher } from "@/lib/grpc/serverFetcher"
import { AuthController } from "./api/v1/admin/Auth_connect"
export async function middleware(request: NextRequest) {
  // ダッシュボードのページを保護する
  try {
    const allCookies = request.cookies.getAll()
    console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]

    // const accessToken = request.cookies.get('accessToken')
    // const refreshToken = request.cookies.get('RefreshToken')

    // const requestHeaders = new Headers(request.headers)
    // requestHeaders.set('x-hello-from-middleware1', 'hello')

    // // You can also set request headers in NextResponse.rewrite
    // const response = NextResponse.next({
    //   request: {
    //     // New request headers
    //     headers: requestHeaders,
    //   },
    // })

    // response.headers.set('x-hello-from-middleware2', 'hello')
  } catch (error) {
    console.error(error)
    const url = request.nextUrl.clone()
    url.pathname = "/" // ログインページへのパス
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
export const config = {
  matcher: "/dashboard/:path*",
}
