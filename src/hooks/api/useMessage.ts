import { MessageController } from "@/api/v1/admin/Messages_connect"
import { MessageResponse } from "@/api/v1/admin/Messages_pb"
import { useGrpc } from "@/hooks/api/useGrpc"

export type Message = MessageResponse

export const useMessage = () => {
  const { client } = useGrpc(MessageController)
  const getRecent = async () => {
    try {
      return await client.update({ limit: 30 })
    } catch (error) {
      console.error(error)
      alert(error)
    }
  }

  return { getRecent }
}
