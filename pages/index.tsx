import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className={styles.container}>
          <h2 className={styles.title}>Hi there</h2>
        </header>
      </main>

    </>
  )
}
