import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Text } from 'react-native';
import { View } from 'react-native'
import Border_Text from "@/assets/images/Border-Text.svg";
import { SvgProps } from 'react-native-svg';

type Props = {
    Svg:React.FC<SvgProps>
    title:string,
    description:string
}

const GoalCard = ({Svg,title,description}:Props) => {
  return (
    <View className=" flex-1  items-center justify-center  shadow-lg flex flex-col max-w-[276px] ">
      <LinearGradient
        colors={["#9DCEFF", "#92A3FD"]}
        className="w-full   flex items-center justify-center h-full rounded-[22px]"
        start={[0.1, 0.1]}
        end={[1, 0]}
      >
        <Svg />
        <View className="card-text flex flex-col  items-center justify-center space-y-6 ">
          <View className="flex-col items-center gap-1 justify-center">
            <Text className="text-white text-[14px] font-semibold leading-[21px]">
              {title}
            </Text>
            <Border_Text />
          </View>
          <View className="box-border ">
            <Text className="text-sm leading-[18px] font-normal text-center mx-11 text-white ">
              {description}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export default GoalCard