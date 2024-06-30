import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <nav className="container">
        <div>
          <Image src="/assets/dogs.svg" alt="Marca Dogs" width={28} height={22} />
        </div>
        <div className={styles.login}>
          <span>Login / Criar</span>
          <div>
            <Image
              src="/assets/usuario.svg"
              alt="Marca Dogs"
              width={14}
              height={17}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
