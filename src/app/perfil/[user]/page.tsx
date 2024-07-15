import photosGet from "@/actions/photosGet";
import Feed from "@/components/Feed/Feed";

type Props = {
  params: { user: string };
};

export default async function PerfilUserPage({ params }: Props) {
  const { data } = await photosGet({ user: params.user });

  if (!data) return null;
  return (
    <section className="container mainContainer">
      <h1 className="title">{params.user}</h1>
      <Feed photos={data} user={params.user} />
    </section>
  );
}
