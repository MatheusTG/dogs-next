import { Metadata } from "next";
import styles from "../login.module.css";
import LoginCriarForm from "@/components/Login/LoginCriarForm";

export const metadata: Metadata = {
  title: "Crie sua conta",
  description: "Crie sua conta no site Dogs.",
};

export default async function CriarPage() {
  return (
    <>
      <h1 className="title">Cadastre-se</h1>
      <LoginCriarForm />
    </>
  );
}
