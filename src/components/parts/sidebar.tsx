import Link from "next/link"

import type { FC } from "react"
type Props = { id?: string }

import styles from "./sidebar.module.scss"

const Sidebar: FC<Props> = ({ id = "users" }) => {
  // if (!title) return null
  return (
    <nav className={styles.sidebar}>
      <h2>TOP</h2>
      <ul>
      {/* <li className={`${id == "users" ? "active" : ""}`}> */}
      <li className={id == "users" ? styles.active : ""}>
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
export { Sidebar }
