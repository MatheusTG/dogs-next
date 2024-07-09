"use client";

import useForm from "@/hooks/useForm";
import Input from "../Form/Input";
import Button from "../Form/Button";
import styles from "./LoginForm.module.css";
import Login from "@/actions/Login";
import { useFormState, useFormStatus } from "react-dom";

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button type="submit" disabled={pending}>
          Enviando...
        </Button>
      ) : (
        <Button type="submit" disabled={pending}>
          Entrar
        </Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const user = useForm();
  const password = useForm();
  const [state, action] = useFormState(Login, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <form action={action} className={styles.form}>
      <Input
        label="Usuário"
        error={user.error}
        id="username"
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
      <LoginButton />
      <p>{state.error}</p>
    </form>
  );
}
