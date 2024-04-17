import { colors } from "@/constants"
import { StyleSheet, Text, View } from "react-native"

interface CardProps {
  title?: string
  children: React.ReactNode
  group: string
  kcal: number
}

export function Card({ children, title, group, kcal }: CardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>{children}</View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerTitle}>Grupo Alimentar:</Text>
          <Text style={styles.footerText}>{group}</Text>
        </View>
        <View>
          <Text style={styles.footerTitle}>Energia:</Text>
          <Text style={styles.footerText}>{kcal} kcal</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.neutral200,
    borderRadius: 6,
    borderWidth: 2,
    gap: 16,
    padding: 16,
    width: "100%"
  },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 20
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  footerTitle: {
    color: colors.neutral500,
    fontFamily: "Inter-Regular",
    fontSize: 12
  },
  footerText: {
    fontFamily: "Inter-Bold"
  }
})
