import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { USER_GET } from "@/functions/api";
import UserGet from "@/actions/UserGet";

export default async function Header() {
  const { data } = await UserGet();

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
        {data ? (
          <Link href={"conta"} className={styles.login}>
            <span>{data.username}</span>
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
          <Link href={"/login"} className={styles.login}>
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
