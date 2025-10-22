import { defineConfig } from "drizzle-kit";
import { serverEnvVars } from "@/env/server";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: serverEnvVars.DATABASE_SESSION_POOLER_CONNECTION_STRING,
  },
});
