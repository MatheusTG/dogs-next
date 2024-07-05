"use client";

import useForm from "@/hooks/useForm";
import styles from "./login.module.css";
import Input from "@/components/Form/Input";
import Button from "@/components/Form/Button";

export default function LoginPage() {
  const user = useForm();
  const password = useForm();

  return (
    <main className={styles.login}>
      <div className={styles.imagemDog} />
      <div className={styles.loginContent}>
        <h1 className="title">Login</h1>
        <form action="" className={styles.form}>
          <Input
            label="Usuário"
            error={user.error}
            id="user"
            value={user.value}
            onChange={user.onChange}
            onBlur={user.onBlur}
          />
          <Input
            label="Senha"
            error={password.error}
            id="password"
            value={password.value}
            onChange={password.onChange}
            onBlur={password.onBlur}
          />
          <Button type="submit">Entrar</Button>
        </form>

        <a className={styles.lostPassword}>Perdeu a senha?</a>

        <div className={styles.registerContainer}>
          <h2 className={styles.formSubtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <a className={styles.buttonRegister}>Cadastro</a>
        </div>
      </div>
    </main>
  );
}
