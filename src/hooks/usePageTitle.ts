import { useState } from "react"

export const usePageTitle = (title: string = "平和台ホテルアプリ管理画面") => {
  const [pageTitle, setPageTitle] = useState(title)

  return { pageTitle, setPageTitle }
}
