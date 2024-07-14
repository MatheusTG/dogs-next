"use client";

import { useFormState, useFormStatus } from "react-dom";
import styles from "./PhotoCommentsForm.module.css";
import EnviarIcon from "@/icons/EnviarIcon";
import ErrorMessage from "../helper/ErrorMessage";
import { Comment } from "@/actions/photoGet";
import commentPost from "@/actions/commentPost";
import React from "react";

type Props = {
  single: boolean;
  id: number;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
};

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.button} disabled={pending}>
      <EnviarIcon />
    </button>
  );
}

export default function PhotoCommentsForm({ single, id, setComments }: Props) {
  const [comment, setComment] = React.useState("");

  const [state, action] = useFormState(commentPost, {
    ok: false,
    data: null,
    error: "",
  });

  React.useEffect(() => {
    if (state.ok && state.data) {
      setComments((comments) => [...comments, state.data]);
      setComment("");
    }
  }, [state, setComments]);

  return (
    <form
      action={action}
      className={`${styles.form} ${single ? styles.single : ""}`}
    >
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  );
}
