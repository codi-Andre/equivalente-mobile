import { colors } from "@/constants"
import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { Dropdown } from "react-native-element-dropdown"

interface ComboboxProps<T> {
  side?: "top" | "bottom" | "auto"
  value: string
  setValue: (val: string) => void
  list: T[]
}

export function Combobox<T extends { label: string; value: string }>({
  side = "auto",
  list = [],
  setValue,
  value
}: ComboboxProps<T>) {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <Dropdown
      dropdownPosition={side}
      style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={list}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? "Escolha um alimento..." : "..."}
      searchPlaceholder="Busque um alimento..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setValue(item.value)
        setIsFocus(false)
      }}
    />
  )
}

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: colors.neutral200,
    borderWidth: 2,
    borderRadius: 4,
    paddingHorizontal: 4
  },
  iconStyle: {
    width: 24,
    height: 24
  },
  inputSearchStyle: {
    height: 40
  }
})
