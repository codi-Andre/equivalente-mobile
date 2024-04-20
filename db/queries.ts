import { eq } from "drizzle-orm"
import { db } from "./db"
import { categoriesTable, foodTable, nutrientsTable } from "./schema"

export function getTable() {
  const data = db
    .select({ id: foodTable.id, name: foodTable.name })
    .from(foodTable)
    .all()

  if (!data.length) {
    return []
  }

  return data
}

export function getFoodSet(
  id1: string,
  id2: string
): { kcal: number; category: string }[] {
  const food1 = db
    .select({ category: categoriesTable.name, kcal: nutrientsTable.kcal })
    .from(categoriesTable)
    .where(eq(foodTable.id, id1))
    .leftJoin(foodTable, eq(foodTable.categoryId, categoriesTable.id))
    .leftJoin(nutrientsTable, eq(foodTable.id, nutrientsTable.foodId))
    .all()

  const food2 = db
    .select({ category: categoriesTable.name, kcal: nutrientsTable.kcal })
    .from(categoriesTable)
    .where(eq(foodTable.id, id2))
    .leftJoin(foodTable, eq(foodTable.categoryId, categoriesTable.id))
    .leftJoin(nutrientsTable, eq(foodTable.id, nutrientsTable.foodId))
    .all()

  return [
    { category: food1[0].category, kcal: food1[0].kcal ?? 0 },
    { category: food2[0].category, kcal: food2[0].kcal ?? 0 }
  ]
}
