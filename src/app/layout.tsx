import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { TypeSecond } from "../functions/fonts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={TypeSecond.variable}>
        <Header />
        <main className="appBody">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
