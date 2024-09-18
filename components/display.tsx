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
          color: title ? colors.black : colors.neutral500,
        }}
      >
        {title ? title : "Quantidade (g)"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 4,
    width: "100%",
  },
});
