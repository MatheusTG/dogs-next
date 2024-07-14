import photosGet from "@/actions/photosGet";
import Feed from "@/components/Feed/Feed";

export default async function Home() {
  const { data: photos } = await photosGet();

  return (
    <section className="container mainContainer" style={{paddingTop: '1rem'}}>
      {photos && <Feed photos={photos} />}
    </section>
  );
}
