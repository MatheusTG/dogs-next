"use client";

import React from "react";
import FeedPhotos from "./FeedPhotos";
import photosGet, { Photo } from "@/actions/photosGet";

type Props = {
  photos: Photo[];
  user?: 0 | string;
};

export default function Feed({ photos, user }: Props) {
  const [photosFeed, setPhotosFeed] = React.useState<Photo[]>(photos);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [infinite, setInfinite] = React.useState(photos.length >= 6);

  const fetching = React.useRef(false);

  function infiniteScroll() {
    if (fetching.current) return;
    fetching.current = true;
    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
  }

  React.useEffect(() => {
    if (page === 1) return;
    async function getPagePhotos(page: number) {
      const actionData = await photosGet(
        { page, total: 6, user: 0 },
        {
          cache: "no-cache",
        }
      );
      if (actionData && actionData.data !== null) {
        const { data } = actionData;
        setPhotosFeed((currentPhotos) => [...currentPhotos, ...data]);
        if (data.length < 6) setInfinite(false);
      }
    }
    getPagePhotos(page);
  }, [page]);

  React.useEffect(() => {
    if (infinite) {
      setLoading(true);
      window.addEventListener("scroll", infiniteScroll);
      window.addEventListener("wheel", infiniteScroll);
    } else {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    }
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      <FeedPhotos photos={photosFeed} />
      {loading && <p>Carregando...</p>}
    </div>
  );
}
