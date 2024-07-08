import PhotosGet from "@/actions/PhotosGet";
import Feed from "@/components/Feed/Feed";

export default async function Home() {
  const photos = await PhotosGet();

  return (
    <section className="container mainContainer">
      <Feed photos={photos} />
    </section>
  );
}
