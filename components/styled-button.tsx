import { colors } from "@/constants";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface StyledButtonProps {
  title: string;
  variant?: "primary" | "outline";
  flex1?: boolean;
  disabled?: boolean;
  onPress: () => void;
}

export function StyledButton({
  disabled = false,
  flex1,
  title,
  variant = "primary",
  onPress,
}: StyledButtonProps) {
  return (
    <TouchableOpacity
      style={[
        buttonStyles[variant],
        {
          flex: flex1 ? 1 : 0,
          opacity: disabled ? 0.7 : 1,
          alignItems: "center",
          borderRadius: 6,
          borderWidth: 2,
          height: 48,
          justifyContent: "center",
          paddingHorizontal: 8,
          minWidth: 120,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text style={[titleStyles[variant], { fontFamily: "Inter-Medium" }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    color: colors.black,
  },
  outline: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
});

const titleStyles = StyleSheet.create({
  primary: {
    fontWeight: "bold",
    color: colors.white,
  },
  outline: {
    color: colors.white,
  },
});
