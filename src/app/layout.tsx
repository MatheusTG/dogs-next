import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { TypeSecond } from "../functions/fonts";
import Footer from "@/components/Footer";
import { UserContextProvider } from "@/context/UserContext";
import UserGet from "@/actions/UserGet";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorros.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await UserGet();

  return (
    <html lang="pt-br">
      <body className={TypeSecond.variable}>
        <UserContextProvider user={user}>
          <Header />
          <main className="appBody">{children}</main>
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  );
}
