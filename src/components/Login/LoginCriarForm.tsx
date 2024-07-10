"use client";

import useForm from "@/hooks/useForm";
import Input from "../Form/Input";
import Button from "../Form/Button";
import styles from "./LoginForm.module.css";
import { useFormState, useFormStatus } from "react-dom";
import ErrorMessage from "../helper/ErrorMessage";
import React from "react";
import userPost from "@/actions/userPost";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button type="submit" disabled={pending}>
          Cadastrando...
        </Button>
      ) : (
        <Button type="submit" disabled={pending}>
          Cadastrar
        </Button>
      )}
    </>
  );
}

export default function LoginCriarForm() {
  const user = useForm();
  const password = useForm();
  const email = useForm("email");
  const [state, action] = useFormState(userPost, {
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
        label="Email"
        error={email.error}
        id="email"
        value={email.value}
        onChange={email.onChange}
        onBlur={email.onBlur}
      />
      <Input
        label="Senha"
        error={password.error}
        id="password"
        value={password.value}
        onChange={password.onChange}
        onBlur={password.onBlur}
      />
      <FormButton />
      {state.error && <ErrorMessage error={state.error} />}
    </form>
  );
}
