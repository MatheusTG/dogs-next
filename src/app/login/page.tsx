"use client";

import LoginForm from "@/components/Login/LoginForm";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <section className="animaLeft">
      <h1 className="title">Login</h1>
      <LoginForm />

      <a className={styles.lostPassword}>Perdeu a senha?</a>

      <div className={styles.registerContainer}>
        <h2 className={styles.formSubtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <a className={styles.buttonRegister}>Cadastro</a>
      </div>
    </section>
  );
}
