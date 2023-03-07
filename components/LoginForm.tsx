import React from "react";
import { TextField, Button } from "@mui/material";
import styles from '@/styles/components/LoginForm.module.css'

const LoginForm = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // perform login logic here
    };

    return (
        <form onSubmit={handleSubmit}>
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
                Login
            </Button>
        </form>
    );
};

export default LoginForm;
