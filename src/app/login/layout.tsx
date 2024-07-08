import React from "react";
import styles from "./login.module.css";
import Input from "@/components/Form/Input";
import useForm from "@/hooks/useForm";
import Button from "@/components/Form/Button";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles.login}>
      {children}
    </section>
  );
}
