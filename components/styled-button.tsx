import { colors } from "@/constants"
import { ComponentPropsWithoutRef } from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

interface StyledButtonProps
  extends ComponentPropsWithoutRef<typeof TouchableOpacity> {
  title: string
  variant?: "primary" | "outline"
  flex1?: boolean
}

export function StyledButton({
  flex1,
  title,
  variant = "primary",
  ...props
}: StyledButtonProps) {
  return (
    <TouchableOpacity
      style={[
        buttonStyles.default,
        buttonStyles[variant],
        { flex: flex1 ? 1 : 0 }
      ]}
      {...props}
      activeOpacity={0.7}
    >
      <Text style={[titleStyles.default, titleStyles[variant]]}>{title}</Text>
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
    paddingHorizontal: 8,
    minWidth: 120
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
