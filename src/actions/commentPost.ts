"use server";

import { apiError } from "@/functions/apiError";
import { COMMENT_POST } from "@/functions/api";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { Comment } from "./photoGet";

export default async function commentPost(state: {}, formData: FormData) {
  const token = cookies().get("token");
  const comment = formData.get("comment") as string | null;
  const id = formData.get("id") as string | null;

  try {
    if (!token || !comment || !id) throw new Error("Preencha os dados.");
    const { url } = COMMENT_POST(id);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token.value,
      },
      body: formData,
    });

    if (!response.ok) throw new Error("Erro ao enviar commentário.");
    const data = (await response.json()) as Comment;
    revalidateTag("comment");
    return { data, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
