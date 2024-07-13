import photosGet from "@/actions/photosGet";
import userGet from "@/actions/userGet";
import Feed from "@/components/Feed/Feed";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Minha Conta",
};

export default async function ContaPage() {
  const { data: user } = await userGet();
  const { data } = await photosGet({ user: user?.username });

  return (
    <div>
      {data?.length ? (
        <Feed photos={data} user={user?.username} />
      ) : (
        <div>
          <p
            style={{ color: "#444", fontSize: "1.25rem", marginBottom: "1rem" }}
          >
            Nenhuma foto encontrada.
          </p>
          <Link
            href="/conta/postar"
            className="button"
            style={{ display: "inline-block" }}
          >
            Postar Foto
          </Link>
        </div>
      )}
    </div>
  );
}
