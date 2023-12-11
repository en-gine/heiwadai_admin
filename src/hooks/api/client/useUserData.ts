import { clientFetcher } from "@/lib/grpc/clientFetcher"
import { UserDataController } from "@/api/v1/admin/UserData_connect"

export type UserSearchFilter = {
  lastName?: string
  firstName?: string
  lastNameKana?: string
  firstNameKana?: string
  prefecture?: string
}
export const useUserData = () => {
  const getList = async (page: number) => {
    const fetcher = clientFetcher(UserDataController)
    try {
      return await fetcher.getList({
        Search: {},
        Pager: {
          CurrentPage: page,
          PerPage: 30,
        },
      })
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  return { getList }
}
