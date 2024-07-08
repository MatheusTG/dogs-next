export default async function FotoIdPage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <section className="container mainContainer">
      <h1>{params.id}</h1>
    </section>
  );
}
