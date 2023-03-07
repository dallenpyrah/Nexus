import Head from 'next/head'
import styles from '@/styles/pages/Home.module.css'
import {Button} from "@mui/material";
import LoginComponent from '@/components/LoginForm';
import {ForgotPasswordLink} from "@/components/ForgotPasswordLink";

export default function Home() {
  return (
    <div>
        <Head>
            <title>Nexus</title>
        </Head>

        <div className={styles.container}>
            <h1 className={styles.title}>
                Welcome to Nexus
            </h1>
            <LoginComponent/>
            <ForgotPasswordLink/>
        </div>
    </div>
  )
}
