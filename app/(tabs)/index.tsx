import { StyledButton } from "@/components/styled-button"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function TabOneScreen() {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.container}>
          <Text>Hello World</Text>
          <StyledButton title="Button" variant="outline" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  }
})
