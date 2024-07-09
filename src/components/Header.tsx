import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  const user = false;

  return (
    <header className={`${styles.header}`}>
      <nav className="container">
        <Link href={"/"}>
          <Image
            src="/assets/dogs.svg"
            alt="Marca Dogs"
            width={28}
            height={22}
            priority
          />
        </Link>
        {user ? (
          <Link href={"conta"} className={styles.login}>
            <span>Dogs</span>
            <div>
              <Image
                src="/assets/usuario.svg"
                alt="Marca Dogs"
                width={14}
                height={17}
                priority
              />
            </div>
          </Link>
        ) : (
          <Link href={"login"} className={styles.login}>
            <span>Login / Criar</span>
            <div>
              <Image
                src="/assets/usuario.svg"
                alt="Marca Dogs"
                width={14}
                height={17}
                priority
              />
            </div>
          </Link>
        )}
      </nav>
    </header>
  );
}
