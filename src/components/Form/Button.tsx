import styles from "./Button.module.css";

export default function Button({
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button className={styles.button} {...props} >
      {children}
    </button>
  );
}
