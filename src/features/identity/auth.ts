import { betterAuth } from "better-auth";
import { serverEnvVars } from "@/env/server";

const auth = betterAuth({
  secret: serverEnvVars.AUTH_SECRET,
  baseURL: serverEnvVars.AUTH_URL,
});

export { auth };
