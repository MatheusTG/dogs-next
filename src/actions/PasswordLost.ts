"use server";

import { apiError } from "@/functions/apiError";
import { cookies } from "next/headers";
import { PASSWORD_LOST } from "@/functions/api";

export default async function PasswordLost(state: {}, formData: FormData) {
  const login = formData.get("login") as string | null;
  const urlPerdeu = formData.get("url") as string | null;
  
  try {
    if (!login) throw new Error("Preencha os dados.");
    const { url } = PASSWORD_LOST();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, url: urlPerdeu }),
    });

    const data = await response.json();

    if (!response.ok) throw new Error("Email ou usuário não cadastrado.");
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
