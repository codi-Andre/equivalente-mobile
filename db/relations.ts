import { relations } from "drizzle-orm"
import { categoriesTable, foodTable, nutrientsTable } from "./schema"

export const categoriesTableRelations = relations(categoriesTable, ({ many }) => ({
  foodTable: many(foodTable),
}))

export const foodTableRelations = relations(foodTable, ({ one }) => ({
  category: one(categoriesTable, {
    fields: [foodTable.categoryId],
    references: [categoriesTable.id],
  }),
  nutrientsTable: one(nutrientsTable, {
    fields: [foodTable.id],
    references: [nutrientsTable.foodId],
  }),
}))

export const nutrientsTableRelations = relations(nutrientsTable, ({ one }) => ({
  foodTable: one(foodTable, {
    fields: [nutrientsTable.foodId],
    references: [foodTable.id],
  }),
}))