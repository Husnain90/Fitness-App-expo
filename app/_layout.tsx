import { useFonts } from "expo-font";
import "../global.css";
import { Stack } from "expo-router";
import CustomFonts from "@/components/customFonts";
export default function RootLayout() {
  return (
    <CustomFonts>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </CustomFonts>
  );
}
