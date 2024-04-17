import { Card } from "@/components/card"
import { Combobox } from "@/components/combobox"
import { Icon } from "@/components/icon"
import { StyledButton } from "@/components/styled-button"
import { StyledInput } from "@/components/styled-input"
import { colors } from "@/constants"
import { useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const data = [
  { value: "1", label: "Mobiles" },
  { value: "2", label: "Appliances" },
  { value: "3", label: "Cameras" },
  { value: "4", label: "Computers" },
  { value: "5", label: "Vegetables" },
  { value: "6", label: "Diary Products" },
  { value: "7", label: "Drinks" }
]

export default function Home() {
  const [food1, setFood1] = useState("")
  const [food2, setFood2] = useState("")

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Card title="Atual" group="Cereais e derivados" kcal={130}>
          <Combobox list={data} value={food1} setValue={setFood1} />

          <StyledInput placeholder="Quantidade (g)" keyboardType="numeric" />
        </Card>

        <Icon name="chevronDown" size={32} color={colors.neutral300} />

        <Card title="Substituto" group="Cereais e derivados" kcal={130}>
          <Combobox side="top" list={data} value={food2} setValue={setFood2} />

          <StyledInput readOnly />
        </Card>

        <View style={styles.separator}>
          <StyledButton title="Limpar" variant="outline" flex1 />
          <StyledButton title="Calcular" flex1 />
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
    marginVertical: 16,
    width: "100%"
  }
})
