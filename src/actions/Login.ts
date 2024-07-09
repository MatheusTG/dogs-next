"use server";

import { apiError } from "@/functions/apiError";
import { cookies } from "next/headers";
import { TOKEN_POST } from "@/functions/api";

export default async function Login(state: {}, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    if (!username || !password) throw new Error("Preencha os dados.");
    const { url } = TOKEN_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data)

    if (!response.ok) throw new Error("Senha ou usuário inválidos.");
    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 69 * 60 * 24,
    });
    return { ok: true, error: "", data: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
