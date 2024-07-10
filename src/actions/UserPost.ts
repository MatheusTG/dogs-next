"use server";

import { apiError } from "@/functions/apiError";
import { USER_POST } from "@/functions/api";
import Login from "./Login";

export default async function UserPost(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!username || !email || !password) throw new Error("Preencha os dados.");
    if (password.length < 6)
      throw new Error("A senha deve ter mais de 6 dígitos.");
    const { url } = USER_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const { ok } = await Login({ ok: true }, formData);
    if (!ok) throw new Error("Error ao logar.");

    if (!response.ok) throw new Error("Email ou usuário já cadastrado.");
    return { ok: true, error: "", data: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
