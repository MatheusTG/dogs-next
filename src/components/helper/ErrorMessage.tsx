export default function ErrorMessage({ error }: { error: string }) {
  if (error === "") return null;
  return <p style={{ color: "#f31", marginTop: "0.5rem" }}>{error}</p>;
}
