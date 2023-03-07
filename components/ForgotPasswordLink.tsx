import styles from '@/styles/components/ForgotPasswordLink.module.css'


export const ForgotPasswordLink = () => {
    return (
        <a href="/forgot-password" className={styles.forgot_password_link}>Forgot Password?</a>
    );
}
