import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <Image src="/assets/dogs.svg" alt="Marca Dogs" width={28} height={22} />
      </div>

      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
}
