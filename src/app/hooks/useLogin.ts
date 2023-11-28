import { useClient } from "@/lib/client"
import { AuthController } from "@/api/v1/admin/Auth_connect"
import { ConnectError } from "@connectrpc/connect"
import { setCookie, destroyCookie } from "nookies"

export const useLogin = () => {
  const client = useClient(AuthController)

  const signIn = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    try {
      const message = await client.signIn({
        email: email,
        password: password,
      })
      setCookie(null, "accessToken", message.accessToken, {
        MaxAge: message.expiresIn,
        path: "/",
      })
      setCookie(null, "refreshToken", message.refreshToken, {
        path: "/",
      })
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  const signOut = async () => {
    try {
      await client.signOut({})
      destroyCookie(null, "accessToken")
      destroyCookie(null, "refreshToken")
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  return { signIn, signOut }
}
