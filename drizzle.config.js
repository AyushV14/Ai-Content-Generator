import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utlis/schema.ts",
  out: "./drizzle",
  dbCredentials:{
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL
  }
});
