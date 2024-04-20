import { db } from "./db"
import { categoriesTable, foodTable, nutrientsTable } from "./schema"
import categories from "./tableData/categories.json"
import food from "./tableData/food.json"
import nutrients from "./tableData/nutrients.json"

export async function seedDb() {
  const categoriesData = await db.select().from(categoriesTable).limit(1)

  if (categoriesData.length === 0) {
    await db.insert(categoriesTable).values(categories).onConflictDoNothing()
  }

  const foodData = await db.select().from(foodTable).limit(1)

  if (foodData.length === 0) {
    await db.insert(foodTable).values(food).onConflictDoNothing()
  }

  const nutrientsData = await db.select().from(nutrientsTable).limit(1)

  if (nutrientsData.length === 0) {
    await db.insert(nutrientsTable).values(nutrients).onConflictDoNothing()
  }

  return true
}
