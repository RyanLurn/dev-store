import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/connection";
import { serverEnvVars } from "@/env/server";

const auth = betterAuth({
  secret: serverEnvVars.AUTH_SECRET,
  baseURL: serverEnvVars.AUTH_URL,
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
});

export { auth };
