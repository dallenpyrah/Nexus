import React from "react";
import { TextField, Button } from "@mui/material";
import styles from '@/styles/components/LoginForm.module.css'
import {useRouter} from "next/router";

const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // perform login logic here
    };

    async function login(event: any) {
        event.preventDefault();

        console.log("Logging in...");

        await router.push('/dashboard');
    }

    return (
        <form onSubmit={login} className={styles.form}>
            <TextField
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                margin="normal"
                fullWidth
            />
            <TextField
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                margin="normal"
                fullWidth
            />
            <Button variant="contained" className={styles.login_button} type="submit">
                Continue
            </Button>
        </form>
    );
};

export default LoginForm;
