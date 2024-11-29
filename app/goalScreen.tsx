import ScreenLayout from "@/components/ScreenLayout";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import ManWithDumble from "@/assets/images/manWithdumble.svg";
import { LinearGradient } from "expo-linear-gradient";
import JumpingMan from "@/assets/images/jumingMan.svg";
import RunningMan from "@/assets/images/RunningMan.svg";
import GoalCard from "@/components/GoalCard";
import { useRouter } from "expo-router";


const cardData = [
  {
    id: 1,
    Svg : ManWithDumble,
    cardTitle: "Improve Shape",
    cardDescription:
      "I have a low amount of body fat and need / want to build more muscle",
  },
  {
    id: 2,
    Svg :JumpingMan,
    cardTitle: "Lean & Tone",
    cardDescription:
      "I m “skinny fat”. look thin but have no shape. I want to add learn muscle in the right way",
  },
  {
    id: 3,
    Svg : RunningMan,
    cardTitle: "Lose a Fat",
    cardDescription:
      "I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass",
  },
];

type Props = {};

const goalScreen = (props: Props) => {
  const router = useRouter()
  return (
    <ScreenLayout>
      <View className="flex flex-1 flex-col space-y-7 ">
        <View className="title-section mx-14  justify-center items-center font-poppinsRegular flex flex-col ">
          <Text className="font-poppinsBold text-xl font-bold leading-7">
            What is your goal ?
          </Text>
          <View className="flex flex-row mt-1">
            <Text className="text-xs leading-[18px] font-normal text-gray_1 text-center">
              It will help us to choose a best program for you
            </Text>
          </View>
        </View>
        
     <ScrollView horizontal contentContainerStyle={{gap:10}}>
      {
        cardData.map((data)=>( <GoalCard title={data.cardTitle} Svg={data.Svg} description={data.cardDescription} />))
      }
     </ScrollView>
        <View className="flex flex-col mb-4">
          <Pressable
            onPress={() => {
              router.push("/sleep/sleepScreen");
            }}
          >
            <LinearGradient
              colors={["#9DCEFF", "#92A3FD"]}
              className="w-full bg-slate-400 h-14 flex items-center justify-center rounded-full "
              start={[0.1, 0.1]}
              end={[1, 0]}
            >
              <Text className="text-base leading-6 font-bold text-white">
                Confirm
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default goalScreen;

