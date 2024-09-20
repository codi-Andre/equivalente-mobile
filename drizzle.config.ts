import type { Config } from "drizzle-kit"

export default {
  dialect: "sqlite",
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "expo",
  verbose: true,
  strict: true
} satisfies Config
