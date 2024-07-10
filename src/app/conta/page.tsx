"use client";

import { useUser } from "@/context/UserContext";
import React from "react";

export default function ContaPage() {
  const { user } = useUser();
  return (
    <main>
      <h1>Conta</h1>
    </main>
  );
}
