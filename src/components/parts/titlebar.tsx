import type { FC } from "react"

import styles from "./titlebar.module.css"

type Props = { title: string }

const Titlebar: FC<Props> = ({ title = "\u00A0" }) => (
  // if (!title) return null
  (<header className={styles.titlebar}>
    <h1>{title}</h1>
  </header>)
)

export default Titlebar
