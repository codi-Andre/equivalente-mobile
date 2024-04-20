import React from "react"
import { Tabs } from "expo-router"
import { Icon } from "@/components/icon"
import { StatusBar } from "expo-status-bar"
import { NutritionalTableProvider } from "@/contexts/nutricional-table-context"

export default function TabLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <NutritionalTableProvider>
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
      </NutritionalTableProvider>
    </>
  )
}
