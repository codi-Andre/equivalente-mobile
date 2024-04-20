import { getFoodSet } from "@/db/queries"
import { seedDb } from "@/db/seed"
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

interface NutritionalTable {
  isDbReady: boolean
  food1: string
  quantity1: string

  food2: string
  quantity2: string

  foodData: {
    group1: string
    calories1: string
    group2: string
    calories2: string
  }

  updateFood: (name: string, position: 1 | 2) => void
  updateQuantity: (quantity: string) => void
  calculateEquivalent: () => void
  clearInputs: () => void
}

const nutritionalTableContext = createContext({} as NutritionalTable)

export function useNutritionalTable() {
  return useContext(nutritionalTableContext)
}

interface NutritionalTableProviderProps {
  children: ReactNode
}

export function NutritionalTableProvider({
  children
}: NutritionalTableProviderProps) {
  const [isDbReady, setIsDbReady] = useState(false)
  const [food1, setFood1] = useState("")
  const [food2, setFood2] = useState("")
  const [quantity1, setQuantity1] = useState("")
  const [quantity2, setQuantity2] = useState("")
  const [foodData, setFoodData] = useState({
    group1: "",
    calories1: "",
    group2: "",
    calories2: ""
  })

  useEffect(() => {
    seedDb().then((success) => setIsDbReady(success))
  }, [])

  function updateFood(name: string, position: 1 | 2) {
    if (position === 1) {
      setFood1(name)
      setFoodData((prev) => ({
        ...prev,
        calories1: "",
        calories2: "",
        group1: ""
      }))
      return
    }

    setFoodData((prev) => ({
      ...prev,
      calories1: "",
      calories2: "",
      group2: ""
    }))
    setFood2(name)
  }

  function updateQuantity(quantity: string) {
    setQuantity1(quantity)
    setFoodData((prev) => ({ ...prev, calories1: "", calories2: "" }))
  }

  function calculateEquivalent() {
    const foodSet = getFoodSet(food1, food2)

    const totalCalories =
      parseFloat((foodSet[0].kcal / 100).toFixed(1)) * parseInt(quantity1)

    const food2CaloriesPerGram = parseFloat((foodSet[1].kcal / 100).toFixed(1))

    const food2Quantity = (totalCalories / food2CaloriesPerGram).toFixed(1)

    setQuantity2(`${food2Quantity} (g)`)
    setFoodData({
      calories1: totalCalories.toFixed(1) + " kcal",
      calories2: totalCalories.toFixed(1) + " kcal",
      group1: foodSet[0].category,
      group2: foodSet[1].category
    })
  }

  function clearInputs() {
    setFood1("")
    setFood2("")
    setQuantity1("")
    setQuantity2("")
    setFoodData({
      group1: "",
      calories1: "",
      group2: "",
      calories2: ""
    })
  }

  return (
    <nutritionalTableContext.Provider
      value={{
        isDbReady,
        food1,
        food2,
        quantity1,
        quantity2,
        foodData,
        calculateEquivalent,
        clearInputs,
        updateFood,
        updateQuantity
      }}
    >
      {children}
    </nutritionalTableContext.Provider>
  )
}
