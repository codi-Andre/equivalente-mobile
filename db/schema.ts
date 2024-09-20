import { real, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const categoriesTable = sqliteTable("categories", {
  id: text("id").primaryKey().notNull(),
  name: text("name").notNull().unique()
})

export const foodTable = sqliteTable("food", {
  id: text("id").primaryKey().notNull(),
  categoryId: text("category_id")
    .references(() => categoriesTable.id, { onDelete: "restrict", onUpdate: "cascade" })
    .notNull(),
  name: text("name").notNull().unique()
})

export const nutrientsTable = sqliteTable("nutrients", {
  foodId: text("food_id")
    .references(() => foodTable.id, { onDelete: "restrict", onUpdate: "cascade" })
    .notNull(),
  kcal: real("kcal").notNull().default(0),
  protein: real("protein").notNull().default(0),
  carbohydrates: real("carbohydrates").notNull().default(0),
  lipids: real("lipids").notNull().default(0)
})
