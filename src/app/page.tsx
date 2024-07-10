import photosGet from "@/actions/photosGet";
import Feed from "@/components/Feed/Feed";

export default async function Home() {
  const photos = await photosGet();

  return (
    <section className="container mainContainer">
      <Feed photos={photos} />
    </section>
  );
}
