import LoginResetarForm from "@/components/Login/LoginResetarForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resete sua senha.",
};

type Props = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetarPage({ searchParams }: Props) {
  return (
    <>
      <h1 className="title">Resete a Senha</h1>
      <LoginResetarForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </>
  );
}
