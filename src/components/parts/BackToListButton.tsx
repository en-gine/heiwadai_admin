"use client"

import { useRouter } from "next/navigation"
import { useCallback } from "react"

type Props = {
  href: string
  label?: string
}

export const BackToListButton = ({ href, label = "一覧へ戻る" }: Props) => {
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push(href)
    router.refresh()
  }, [router, href])

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-blue-600 hover:text-blue-800 underline"
    >
      {label}
    </button>
  )
}