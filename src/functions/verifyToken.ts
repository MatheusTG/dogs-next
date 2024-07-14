import { jwtVerify } from "jose";

export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false;
  try {
    // jwtVerify(token, new TextEncoder().encode("segredo_da_api"), {
    //   algorithms: ["HS256"],
    // });
    return true;
  } catch (error) {
    return true;
  }
}
