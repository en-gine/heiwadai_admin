import { serverFetcher } from "@/lib/grpc/serverFetcher"
import { AuthController } from "@/api/v1/admin/Auth_connect"

export const useLogin = () => {
  const client = serverFetcher(AuthController)
  const refresh = async () => {
    try {
      await client.refresh({})
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  return { refresh }
}
