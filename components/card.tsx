import { colors } from "@/constants";
import { StyleSheet, Text, View } from "react-native";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  group: string;
  kcal: string;
}

export function Card({ children, title, group, kcal }: CardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ gap: 16 }}>{children}</View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerTitle}>Grupo Alimentar:</Text>
          <Text style={styles.footerText}>{group}</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.footerTitle}>Energia:</Text>
          <Text style={styles.footerText}>{kcal}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.background200,
    borderRadius: 6,
    borderWidth: 2,
    gap: 16,
    padding: 16,
    width: "100%",
  },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
    color: colors.neutral700,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerTitle: {
    color: colors.neutral700,
    fontFamily: "Inter-Regular",
    fontSize: 12,
  },
  footerText: {
    fontFamily: "Inter-Bold",
    color: colors.neutral700,
  },
});
