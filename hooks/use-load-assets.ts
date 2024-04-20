import { db } from "@/db/db"
import migrations from "@/db/migrations/migrations"
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator"
import { useFonts } from "expo-font"
import { SplashScreen } from "expo-router"
import { useEffect } from "react"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export function useLoadAssets() {
  const [hasLoadedFonts, loadingFontsError] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf")
  })

  const { success: hasRunMigrations, error: runningMigrationError } =
    useMigrations(db, migrations)

  useEffect(() => {
    if (loadingFontsError) throw loadingFontsError
    if (runningMigrationError) throw runningMigrationError
  }, [loadingFontsError, runningMigrationError])

  useEffect(() => {
    if (hasLoadedFonts && hasRunMigrations) {
      SplashScreen.hideAsync()
    }
  }, [hasLoadedFonts, hasRunMigrations])

  return { isLoaded: hasLoadedFonts && hasRunMigrations }
}
