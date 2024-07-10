import { Photo } from "@/actions/photosGet";
import Image from "next/image";
import Link from "next/link";
import styles from "./Feed.module.css";

type Props = {
  photos: Photo[];
};

export default function FeedPhotos({ photos }: Props) {
  return (
    <ul className={`${styles.feed}`}>
      {photos.map((photo, index) => (
        <li key={photo.id + index} className={styles.photo}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              width={1500}
              height={1500}
              alt={photo.title}
              sizes="80vw"
            />
            <span className={styles.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
