import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

const serverEnvVars = createEnv({
  server: {
    DATABASE_DIRECT_CONNECTION_STRING: z.string().min(1),
    DATABASE_POOLED_CONNECTION_STRING: z.string().min(1),
    AUTH_SECRET: z.string().min(1),
    AUTH_URL: z.url(),
  },
  experimental__runtimeEnv: process.env,
});

export { serverEnvVars };
