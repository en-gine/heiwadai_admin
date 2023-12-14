import { UserDataController } from "@/api/v1/admin/UserData_connect"
import { useGrpc } from "@/hooks/api/useGrpc"

export type UserSearchFilter = {
  lastName?: string
  firstName?: string
  lastNameKana?: string
  firstNameKana?: string
  prefecture?: string
}
export const useUserData = () => {
  const { client } = useGrpc(UserDataController)
  const getList = async (page: number) => {
    try {
      return await client.getList({
        Search: {},
        Pager: {
          CurrentPage: page,
          PerPage: 30
        }
      })
    } catch (error) {
      console.error(error)
      alert(error)
    }
  }

  return { getList }
}
