import type { FC } from "react"
type Props = { title?: string }

import styles from './titlebar.module.css'

const Titlebar: FC<Props> = ({ title = "\u00A0" }) => {
  // if (!title) return null
  return (
    <header className={styles.titlebar}>
      <h1>{title}</h1>
    </header>
  )
}
export { Titlebar }
