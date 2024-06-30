import useForm from "@/hooks/useForm";
import styles from "./login.module.css";

export default async function LoginPage() {
  const user = useForm();

  return (
    <main className={styles.login}>
      <div className={styles.imagemDog} />
      <div className={styles.loginContent}>
        <h1 className="title">Login</h1>
        <form action="">
          <div>
            <label htmlFor="user">Usuário</label>
            <input type="text" id="user" name="user" onChange={user.onChange} />
          </div>
        </form>
      </div>
    </main>
  );
}
