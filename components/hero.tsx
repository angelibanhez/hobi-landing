import Image from "next/image"
import Link from "next/link"
import styles from './hero.module.css'

export function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.heading}>Connect. Share. Experience.</h1>
            <p className={styles.description}>Find people who share your passions and create unforgettable moments together.</p>
            <Link href="#" className={styles.button}>
              Get Started
            </Link>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Hobi app showcase"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

