import Link from "next/link"
import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/attributes" className={styles.link}>
          Attributes
        </Link>
        <Link href="/collection" className={styles.link}>
          Collection
        </Link>
        <Link href="/faq" className={styles.link}>
          FAQ
        </Link>
        <Link href="/roadmap" className={styles.link}>
          Roadmap
        </Link>
      </nav>
    </header>
  )
}

