import { colors } from "@/constants";
import { StyleSheet, Text, View } from "react-native";

interface DisplayProps {
  title?: string;
}

export function Display({ title }: DisplayProps) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: title ? "Inter-Bold" : "Inter-Regular",
          color: title ? colors.neutral700 : colors.neutral500,
        }}
      >
        {title ? `Quantidade:` : "Quantidade (g)"}
      </Text>
      <Text
        style={{
          fontFamily: "Inter-Bold",
          color: colors.black,
        }}
      >
        {title ? title : ""}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 4,
    paddingHorizontal: 4,
    width: "100%",
  },
});
