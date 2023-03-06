import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {Button} from "@mui/material";

export default function Home() {
  return (
    <div>
        <Head>
            <title>Nexus</title>
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                <Button variant="contained">Nexus</Button>
                Made with ❤️ by developers for developers
            </h1>

            <p className={styles.description}>
                A modern, open-source, cross-platform desktop app for managing your projects and tasks.
            </p>

        </main>
    </div>
  )
}
