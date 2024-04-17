import { colors } from "@/constants"
import { ComponentPropsWithoutRef } from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

interface StyledButtonProps
  extends ComponentPropsWithoutRef<typeof TouchableOpacity> {
  title: string
  variant?: "primary" | "outline"
}

export function StyledButton({
  title,
  variant = "primary",
  ...props
}: StyledButtonProps) {
  return (
    <TouchableOpacity
      style={{ ...buttonStyles.default, ...buttonStyles[variant] }}
      {...props}
    >
      <Text style={{ ...titleStyles.default, ...titleStyles[variant] }}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const buttonStyles = StyleSheet.create({
  default: {
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 2,
    height: 48,
    justifyContent: "center",
    paddingHorizontal: 32
  },
  primary: {
    backgroundColor: colors.neutral900,
    borderColor: colors.neutral900
  },
  outline: {
    backgroundColor: colors.neutral50,
    borderColor: colors.neutral200
  }
})

const titleStyles = StyleSheet.create({
  default: {
    fontFamily: "Inter-Medium"
  },
  primary: {
    color: colors.neutral50
  },
  outline: {
    color: colors.neutral700
  }
})
