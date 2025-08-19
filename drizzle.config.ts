import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Load .env.local file
dotenv.config({ path: ".env.local" });

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
