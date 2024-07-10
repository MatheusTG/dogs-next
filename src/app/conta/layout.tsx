import { ContaHeaderNav } from "@/components/Conta/ContaHeader";

export default async function ContaLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <section className="container">
      <ContaHeaderNav />
      {children}
    </section>
  );
}
