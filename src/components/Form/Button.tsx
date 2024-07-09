import styles from "./Button.module.css";

export default function Button({
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
}
