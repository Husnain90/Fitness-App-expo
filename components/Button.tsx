import React from "react";
import { Text } from "react-native";
import { Pressable, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

type Props = {
  title: string;
  onPress: () => void | null;

};

const CustomButton = ({ title, onPress, }: Props) => {
    const buttonClasses = ` flex items-center justify-center`;
  return (
    <Pressable className={buttonClasses} onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
