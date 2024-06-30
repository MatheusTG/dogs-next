"use client";

import styles from "./Input.module.css";

type Props = React.ComponentProps<"input"> & {
  label: string;
  id: string;
};

export default function Input({ label, id, ...props }: Props) {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        type="text"
        id={id}
        name={id}
        {...props}
      />
    </div>
  );
}
