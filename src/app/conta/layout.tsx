import { ContaHeaderNav } from "@/components/Conta/ContaHeader";

export default async function ContaLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <section className="container" style={{ minHeight: "calc(100vh - 4rem)" }}>
      <ContaHeaderNav />
      {children}
    </section>
  );
}
