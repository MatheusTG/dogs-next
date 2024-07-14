"use client";

import logout from "@/actions/logout";
import validateToken from "@/actions/validateToken";
import React from "react";

type User = {
  id: number;
  nome: string;
  username: string;
  email: string;
};

type IUserContext = {
  user: User | null;
  setUserState: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = React.createContext<IUserContext | null>(null);

export function useUser() {
  const context = React.useContext(UserContext);
  if (context === null)
    throw new Error("useContext deve estar dentro do Provider.");
  return context;
}

export function UserContextProvider({
  children,
  user,
}: React.PropsWithChildren & {
  user: User | null;
}) {
  const [userState, setUserState] = React.useState(user);

  React.useEffect(() => {
    async function validade() {
      const { ok } = await validateToken();
      if (!ok) await logout();
    }
    if (userState) validade();
  }, [userState]);

  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}
