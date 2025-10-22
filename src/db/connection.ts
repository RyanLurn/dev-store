import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { serverEnvVars } from "@/env/server";

const client = postgres(serverEnvVars.DATABASE_POOLED_CONNECTION_STRING, {
  prepare: false,
});
const db = drizzle({ client });

export { db };
