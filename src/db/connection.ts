import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as authSchema from "@/db/schema/auth";
import { serverEnvVars } from "@/env/server";

const client = postgres(
  serverEnvVars.DATABASE_TRANSACTION_POOLER_CONNECTION_STRING,
  {
    prepare: false,
  }
);
const db = drizzle({ client, schema: { ...authSchema } });

export { db };
