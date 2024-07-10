"use client";

import useForm from "@/hooks/useForm";
import Input from "../Form/Input";
import Button from "../Form/Button";
import styles from "./LoginForm.module.css";
import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import ErrorMessage from "../helper/ErrorMessage";
import React from "react";

function FormButton() {
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
  const [state, action] = useFormState(login, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

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
        type="password"
        value={password.value}
        onChange={password.onChange}
        onBlur={password.onBlur}
      />
      <FormButton />
      {state.error && <ErrorMessage error={state.error} />}
    </form>
  );
}
