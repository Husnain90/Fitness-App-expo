import React from "react";
import { View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

type screenLayout = {
  children: React.ReactNode;
};

const ScreenLayout = ({ children }: screenLayout) => {
  return (
    <SafeAreaView className="flex-1 ">
      <View className=" flex-1 px-[30px] pt-[40px] bg-backGround_color">{children}</View>
    </SafeAreaView>
  );
};

export default ScreenLayout;
