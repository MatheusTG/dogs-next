"use server";

import { cookies } from "next/headers";

export default async function Login(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const response = await fetch(
    "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  cookies().set("token", data.token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 69 * 60 * 24,
  });

  return;
}
