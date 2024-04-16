import React from "react"
import { Tabs } from "expo-router"
import { Icon } from "@/components/icon"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#262626",
        headerShown: false,
        tabBarStyle: {
          gap: 4
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Equivalente",
          tabBarIcon: ({ color }) => <Icon name="scale" color={color} />
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Buscar",
          tabBarIcon: ({ color }) => <Icon name="search" color={color} />
        }}
      />
    </Tabs>
  )
}
