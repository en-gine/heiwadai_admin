import { AnonAuthController } from "@/api/v1/admin/AnonAuth_connect"
import { AuthController } from "@/api/v1/admin/Auth_connect"
import { disposeToken, storeToken, useGrpc } from "@/hooks/api/useGrpc"

const useLogin = () => {
  const { client } = useGrpc(AnonAuthController)
  const { client: AuthClient } = useGrpc(AuthController)
  const signIn = async ({
    email,
    password
  }: {
    email: string
    password: string
  }) => {
    try {
      const message = await client.signIn({
        email,
        password
      })
      if (message.accessToken) {
        storeToken(
          "accessToken",
          message.accessToken,
          Number(message.expiresIn)
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
      await AuthClient.signOut({})
      disposeToken("accessToken")
      disposeToken("refreshToken")
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  const resetPasswordMail = async (email: string) => {
    try {
      await client.resetPasswordMail({
        email
      })
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const setNewPassword = async (token: string, newPassword: string) => {
    try {
      await client.setNewPassword({
        accessToken: token,
        password: newPassword
      })
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  return { signIn, signOut, resetPasswordMail, setNewPassword }
}
export { useLogin }
