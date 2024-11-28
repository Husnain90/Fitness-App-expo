import { useFonts } from "expo-font";
import "../global.css";
import { Stack } from "expo-router";

import { ActivityIndicator, View } from "react-native";
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
type screenLayout = {
  children: React.ReactNode;
};

export default function CustomFonts({ children }: screenLayout) {

    const [fontLoaded]=useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
    })

  if (!fontLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return <>{children}</>;
}
