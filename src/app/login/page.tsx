"use client";

import useForm from "@/hooks/useForm";
import styles from "./login.module.css";
import Input from "@/components/Input";

export default function LoginPage() {
  const user = useForm("email");

  return (
    <main className={styles.login}>
      <div className={styles.imagemDog} />
      <div className={styles.loginContent}>
        <h1 className="title">Login</h1>
        <form action="">
          <div>
            <Input label="Usuário" id="user" />
          </div>
        </form>
      </div>
    </main>
  );
}
