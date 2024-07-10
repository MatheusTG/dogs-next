"use client";

import useForm from "@/hooks/useForm";
import Input from "../Form/Input";
import Button from "../Form/Button";
import styles from "./LoginForm.module.css";
import { useFormState, useFormStatus } from "react-dom";
import ErrorMessage from "../helper/ErrorMessage";
import React from "react";
import passwordLost from "@/actions/passwordLost";

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
          Enviar Email
        </Button>
      )}
    </>
  );
}

// export const dynamic = "force-dynamic";

export default function LoginPerdeuForm() {
  const email = useForm();
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    setUrl(window.location.href.replace("perdeu", "resetar"));
  }, []);

  return (
    <form action={action} className={styles.form}>
      <Input
        label="Email / Usuário"
        error={email.error}
        id="login"
        value={email.value}
        onChange={email.onChange}
        onBlur={email.onBlur}
      />
      <input type="hidden" name="url" value={url} />

      {state.ok ? (
        <p style={{ color: "#4c1" }}>Email enviado.</p>
      ) : (
        <FormButton />
      )}
      {state.error && <ErrorMessage error={state.error} />}
    </form>
  );
}
