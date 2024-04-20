import { useLoadAssets } from "@/hooks/use-load-assets"
import { Slot } from "expo-router"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from "expo-router"

export default function RootLayout() {
  const { isLoaded } = useLoadAssets()

  if (!isLoaded) return null

  return <Slot />
}
