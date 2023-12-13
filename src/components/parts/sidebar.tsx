"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { FC } from "react"

import styles from "./sidebar.module.scss"

type Props = { id?: string }

const Sidebar: FC<Props> = () => {
  const pathname = usePathname()
  return (
    <nav className={styles.sidebar}>
      <h2 className={pathname === "/dashboard" ? styles.active : ""}>
        <Link href="/dashboard/">TOP</Link>
      </h2>
      <ul>
        <li className={pathname === "/dashboard/users" ? styles.active : ""}>
          <Link href="/dashboard/users">アプリユーザー一覧</Link>
        </li>
        <li className="active">
          <Link href="/dashboard/news">新着情報投稿</Link>
        </li>
        <li>
          <Link href="/dashboard/newsletter">メルマガ配信</Link>
        </li>
        <li>
          <Link href="/dashboard/campaign">キャンペーン掲載</Link>
        </li>
        <li>
          <Link href="/dashboard/shop">店舗管理</Link>
        </li>
        <li>
          <Link href="/dashboard/coupon">特別クーポン作成</Link>
        </li>
        <li>
          <Link href="/dashboard/login_user">ログインユーザー管理</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Sidebar
