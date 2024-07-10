"use client";

import useForm from "@/hooks/useForm";
import Input from "../Form/Input";
import Button from "../Form/Button";
import styles from "./ContaPhotoPost.module.css";
import { useFormState, useFormStatus } from "react-dom";
import ErrorMessage from "../helper/ErrorMessage";
import React from "react";
import photoPost from "@/actions/photoPost";

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
          Enviar
        </Button>
      )}
    </>
  );
}

export default function ContaPhotoPost() {
  const nome = useForm();
  const peso = useForm();
  const idade = useForm();
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: "",
    data: null,
  });

  const [img, setImg] = React.useState("");
  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action} className={styles.form}>
        <Input
          label="Nome"
          error={nome.error}
          id="nome"
          value={nome.value}
          onChange={nome.onChange}
          onBlur={nome.onBlur}
        />
        <Input
          label="Peso"
          error={peso.error}
          id="peso"
          value={peso.value}
          onChange={peso.onChange}
          onBlur={peso.onBlur}
        />
        <Input
          label="Idade"
          error={idade.error}
          id="idade"
          value={idade.value}
          onChange={idade.onChange}
          onBlur={idade.onBlur}
        />
        <input onChange={handleImgChange} type="file" name="img" id="img" />
        <FormButton />
        {state.error && <ErrorMessage error={state.error} />}
      </form>
      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </section>
  );
}
