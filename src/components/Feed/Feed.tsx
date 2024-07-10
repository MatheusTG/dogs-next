"use client";

import FeedPhotos from "./FeedPhotos";
import { Photo } from "@/actions/photosGet";

type Props = {
  photos: Photo[];
};

export default function Feed({ photos }: Props) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
