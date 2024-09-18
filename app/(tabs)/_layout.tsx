import React from "react";
import { Tabs } from "expo-router";
import { Icon } from "@/components/icon";
import { StatusBar } from "expo-status-bar";
import { NutritionalTableProvider } from "@/contexts/nutricional-table-context";
import { colors } from "@/constants";

export default function TabLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <NutritionalTableProvider>
        <Tabs
          sceneContainerStyle={{ backgroundColor: colors.white }}
          screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.background300,
            headerShown: false,
            tabBarStyle: {
              gap: 4,
              borderBlockColor: colors.background300,
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Equivalente",
              tabBarIcon: ({ color }) => <Icon name="scale" color={color} />,
            }}
          />
          <Tabs.Screen
            name="search"
            options={{
              title: "Quem somos",
              tabBarIcon: ({ color }) => <Icon name="search" color={color} />,
            }}
          />
        </Tabs>
      </NutritionalTableProvider>
    </>
  );
}
