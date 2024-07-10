"use client";

import useForm from "@/hooks/useForm";
import Input from "../Form/Input";
import Button from "../Form/Button";
import styles from "./LoginForm.module.css";
import { useFormState, useFormStatus } from "react-dom";
import ErrorMessage from "../helper/ErrorMessage";
import React from "react";
import PasswordReset from "@/actions/PasswordReset";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button type="submit" disabled={pending}>
          Resetando...
        </Button>
      ) : (
        <Button type="submit" disabled={pending}>
          Resetar Senha
        </Button>
      )}
    </>
  );
}

export default function LoginResetarForm({
  keyToken,
  login,
}: {
  keyToken: string;
  login: string;
}) {
  const password = useForm("password");
  const [state, action] = useFormState(PasswordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <form action={action} className={styles.form}>
      <Input
        label="Nova Senha"
        error={password.error}
        id="password"
        type="password  "
        value={password.value}
        onChange={password.onChange}
        onBlur={password.onBlur}
      />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />

      {state.error && <ErrorMessage error={state.error} />}
      <FormButton />
    </form>
  );
}
