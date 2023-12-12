import {
  clientFetcher,
  disposeToken,
  storeToken,
} from "@/lib/grpc/clientFetcher"
import { AuthController } from "@/api/v1/admin/Auth_connect"

export const useLogin = () => {
  const client = clientFetcher(AuthController)

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
      if (message.accessToken) {
        storeToken(
          "accessToken",
          message.accessToken,
          Number(message.expiresIn),
        )
        storeToken("refreshToken", message.refreshToken)
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  const signOut = async () => {
    try {
      await client.signOut({})
      disposeToken("accessToken")
      disposeToken("refreshToken")
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  return { signIn, signOut }
}
