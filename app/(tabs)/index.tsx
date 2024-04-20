import { Card } from "@/components/card"
import { Combobox } from "@/components/combobox"
import { Icon } from "@/components/icon"
import { StyledButton } from "@/components/styled-button"
import { StyledInput } from "@/components/styled-input"
import { colors } from "@/constants"
import { useNutritionalTable } from "@/contexts/nutricional-table-context"
import { getTable } from "@/db/queries"
import { useEffect, useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Home() {
  const {
    isDbReady,
    food1,
    food2,
    quantity1,
    quantity2,
    foodData,
    updateFood,
    updateQuantity,
    clearInputs,
    calculateEquivalent
  } = useNutritionalTable()
  const [table, setTable] = useState<{ id: string; name: string }[]>([])

  useEffect(() => {
    if (isDbReady) {
      setTable(getTable())
    }
  }, [isDbReady])

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Card title="Atual" group={foodData.group1} kcal={foodData.calories1}>
          <Combobox
            list={table}
            value={food1}
            setValue={(id) => updateFood(id, 1)}
          />

          <StyledInput
            placeholder="Quantidade (g)"
            keyboardType="numeric"
            value={quantity1}
            onChangeText={updateQuantity}
          />
        </Card>

        <Icon name="chevronDown" size={32} color={colors.neutral300} />

        <Card
          title="Substituto"
          group={foodData.group2}
          kcal={foodData.calories2}
        >
          <Combobox
            side="top"
            list={table}
            value={food2}
            setValue={(id) => updateFood(id, 2)}
          />

          <StyledInput
            placeholder="Quantidade (g)"
            defaultValue={quantity2}
            readOnly
          />
        </Card>

        <View style={styles.separator}>
          <StyledButton
            title="Limpar"
            variant="outline"
            flex1
            onPress={clearInputs}
          />

          <StyledButton
            title="Calcular"
            flex1
            onPress={calculateEquivalent}
            disabled={!food1 || !food2 || !quantity1}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: colors.neutral50,
    justifyContent: "center",
    paddingHorizontal: 16
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    flexDirection: "row",
    gap: 16,
    marginTop: 16,
    width: "100%"
  }
})
