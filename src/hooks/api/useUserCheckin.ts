import { CheckinData } from "@/api/v1/admin//UserCheckin_pb"
import { UserCheckinController } from "@/api/v1/admin/UserCheckin_connect"
import { useGrpc } from "@/hooks/api/useGrpc"

export type UserCheckin = CheckinData

export const useUserCheckin = () => {
  const { client } = useGrpc(UserCheckinController)
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
