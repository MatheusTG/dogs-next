import LoginPerdeuForm from "@/components/Login/LoginPerdeuForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
  description: "Recupera sua senha.",
};

export default async function PerdeuPage() {
  return (
    <>
      <h1 className="title">Perdeu a senha?</h1>
      <LoginPerdeuForm />
    </>
  );
}
