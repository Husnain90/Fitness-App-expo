import ScreenLayout from "@/components/ScreenLayout";
import React from "react";
import { Pressable, Text } from "react-native";
import { View } from "react-native";
import LeftArrow from "@/assets/images/leftArrow.svg";
import DetailNav from "@/assets/images/Detail-Navs.svg";
import { useRouter } from "expo-router";
import { LineChart, yAxisSides } from "react-native-gifted-charts";
import SleepGrap from "@/assets/images/Sleep-Graph.svg";
import { LinearGradient } from "expo-linear-gradient";

type Props = {};

const sleepScreen = (props: Props) => {
  const router = useRouter();
  const data = [
    { value: 6, label: "Mon" },
    { value: 7.5, label: "Tue" },
    { value: 8, label: "Wed" },
    { value: 5, label: "Thu" },
    { value: 6.5, label: "Fri" },
    { value: 7, label: "Sat" },
    { value: 8.2, label: "Sun" },
  ];

  return (
    <ScreenLayout>
      <View className="flex flex-col flex-auto  bg-white space-y-3">
        <View className="header  flex flex-row items-center justify-between">
          <Pressable
            className="bg-[#F7F8F8] h-[32px] w-[32px] flex items-center justify-center rounded-[8px]"
            onPress={() => router.back()}
          >
            <Text>
              <LeftArrow />
            </Text>
          </Pressable>
          <View>
            <Text className="text-[16px] font-bold font-poppinsBold leading-6">
              Heading
            </Text>
          </View>
          <Pressable
            className="bg-[#F7F8F8] h-[32px] w-[32px] flex items-center justify-center rounded-[8px]"
            onPress={() => router.back()}
          >
            <Text>
              <DetailNav />
            </Text>
          </Pressable>
        </View>
        <View className="w-screen">
          <LineChart
            data={data}
            width={245}
            height={173}
            areaChart
            curved
            yAxisSide={yAxisSides.RIGHT}
            spacing={40}
            yAxisThickness={0}
            xAxisThickness={0}
            isAnimated
            hideRules={false}
            noOfSections={4}
            startFillColor="#93A8FE" // Gradient start color (light green)
            endFillColor="#FFF"
            startOpacity={0.3}
            endOpacity={0}
            color="#92A3FD" // Line color (green)
            thickness={2}
            hideDataPoints={true}
            xAxisLabelTextStyle={{ color: "#7B6F72" }}
            yAxisTextStyle={{ color: "#7B6F72" }}
          />
        </View>
        <View>
          <View className=" h-[148px] relative rounded-[22px] ">
            <LinearGradient
              colors={["#9DCEFF", "#92A3FD"]}
              className="w-full   flex items-center justify-center h-full rounded-[22px]"
              start={[0.1, 0.1]}
              end={[1, 0]}
            >
              <View className=" absolute top-5 left-5  ">
                <Text className="text-white font-medium leading-[21px] text-sm font-poppinsRegular">
                  Last Night sleep
                </Text>
                <Text className="text-white font-medium leading-[21px] text-[16px] font-poppinsRegular">
                  8h 20m
                </Text>
              </View>
              <View className=" absolute bottom-0">
                <SleepGrap />
              </View>
            </LinearGradient>
          </View>
        </View>
        <View>
          <LinearGradient
            className="flex flex-row h-[57px] px-5 items-center justify-between rounded-lg"
            colors={["#9DCEFF80", "#9DCEFF20"]} // Same color with different opacities
            start={[0, 0]}
            end={[0, 0]}
          >
            <View className=" flex-1 flex flex-row justify-between">
              <View>
                <Text className="font-popins font-[500px] text-[14px]">
                  Daily sleep schedule
                </Text>
              </View>

              <Pressable className="rounded-sm w-20 h-1/2">
                <LinearGradient
                  colors={["#9DCEFF", "#92A3FD"]}
                  className="w-full   flex items-center justify-center h-full rounded-[22px]"
                  start={[0.1, 0.1]}
                  end={[1, 0]}
                >
                  <Text className="text-white font-[500px]">Check</Text>
                </LinearGradient>
              </Pressable>
            </View>
          </LinearGradient>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default sleepScreen;

// font-size: 14px;
// font-style: normal;
// font-weight: 500;
// line-height: normal;
