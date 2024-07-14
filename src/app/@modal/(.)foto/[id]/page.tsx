import photoGet from "@/actions/photoGet";
import FeedModal from "@/components/Feed/FeedModal";
import PhotoContent from "@/components/photo/PhotoContent";
import { notFound } from "next/navigation";

type FotoIdParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: FotoIdParams) {
  const { data } = await photoGet(params.id);

  if (!data) return { title: "Fotos" };
  return {
    title: data.photo.title,
  };
}

export default async function FotoIdPage({ params }: FotoIdParams) {
  const { data } = await photoGet(params.id);

  if (!data) notFound();
  return <FeedModal photo={data} />;
}
