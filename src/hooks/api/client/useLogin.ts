import { clientFetcher } from "@/lib/grpc/clientFetcher"
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
      await client.signIn({
        email: email,
        password: password,
      })
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  const signOut = async () => {
    try {
      await client.signOut({})
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  return { signIn, signOut }
}
