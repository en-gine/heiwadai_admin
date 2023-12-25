"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { type FC, useCallback } from "react"

import { useLogin } from "@/hooks/api/useLogin"

import { Command } from "../ui/command"
import styles from "./sidebar.module.scss"

type Props = { id?: string }

const Sidebar: FC<Props> = () => {
  const pathname = usePathname()
  const { signOut } = useLogin()
  const handleLogout = useCallback(async () => {
    try {
      await signOut()
    } catch (e) {
      alert(e)
    }
    window.location.href = "/"
  }, [signOut])

  return (
    <nav className={styles.sidebar}>
      <h2 className={pathname === "/dashboard" ? styles.active : ""}>
        <Link href="/dashboard/">TOP</Link>
      </h2>
      <ul>
        <li className={pathname === "/dashboard/users" ? styles.active : ""}>
          <Link href="/dashboard/users">アプリユーザー一覧</Link>
        </li>
        <li className={pathname === "/dashboard/magazine" ? styles.active : ""}>
          <Link href="/dashboard/magazine">メルマガ配信</Link>
        </li>
        <li className={pathname === "/dashboard/message" ? styles.active : ""}>
          <Link href="/dashboard/message">アプリログイン時通知</Link>
        </li>
        <li className={pathname === "/dashboard/store" ? styles.active : ""}>
          <Link href="/dashboard/store">店舗管理</Link>
        </li>
        <li className={pathname === "/dashboard/coupon" ? styles.active : ""}>
          <Link href="/dashboard/coupon">特別クーポン作成</Link>
        </li>
        <li className={pathname === "/dashboard/admin" ? styles.active : ""}>
          <Link href="/dashboard/admin">管理画面ユーザー管理</Link>
        </li>
        <li className={pathname === "/dashboard/admin" ? styles.active : ""}>
          <Command className="cursor-pointer" onClick={handleLogout}>
            ログアウト
          </Command>
        </li>
      </ul>
    </nav>
  )
}
export default Sidebar
