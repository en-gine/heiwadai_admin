import { clientFetcher } from "@/lib/grpc/clientFetcher"
import { UserCheckinController } from "@/api/v1/admin/UserCheckin_connect"
import { CheckinData } from "@/api/v1/admin//UserCheckin_pb"
export type UserCheckin = CheckinData

export const useUserCheckin = () => {
  const client = clientFetcher(UserCheckinController)
  const getRecent = async () => {
    try {
      return await client.getAllRecent({ limit: 30 })
    } catch (error) {
      console.error(error)
      alert(error)
    }
  }

  return { getRecent }
}
