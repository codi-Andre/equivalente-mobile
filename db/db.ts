import { drizzle } from "drizzle-orm/expo-sqlite"
import { openDatabaseSync } from "expo-sqlite/next"
import * as schema from "./schema"
import * as relations from "./relations"

const expo = openDatabaseSync("taco.db")

export const db = drizzle(expo, { schema: { ...schema, ...relations } })
