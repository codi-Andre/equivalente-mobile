import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const categoriesTable = sqliteTable("categories", {
  id: text("id").primaryKey(),
  name: text("name").notNull().unique()
})

export const foodTable = sqliteTable("food", {
  id: text("id").primaryKey(),
  categoryId: text("category_id")
    .references(() => categoriesTable.id)
    .notNull(),
  name: text("name").notNull().unique()
})

export const nutrientsTable = sqliteTable("nutrients", {
  foodId: text("food_id")
    .references(() => foodTable.id)
    .notNull(),
  kcal: int("kcal").notNull().default(0),
  protein: real("protein").notNull().default(0),
  carbohydrates: real("carbohydrates").notNull().default(0),
  lipids: real("lipids").notNull().default(0)
})
