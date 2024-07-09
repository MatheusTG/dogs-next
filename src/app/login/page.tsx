import LoginForm from "@/components/Login/LoginForm";
import styles from "./login.module.css";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Dogs",
  description: "Logue na sua conta no site Dogs.",
};

export default function LoginPage() {
  return (
    <>
      <h1 className="title">Login</h1>
      <LoginForm />

      <Link href="/login/perdeu" className={styles.lostPassword}>
        Perdeu a senha?
      </Link>

      <div className={styles.registerContainer}>
        <h2 className={styles.formSubtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link href="/login/criar" className="button">
          Cadastro
        </Link>
      </div>
    </>
  );
}
