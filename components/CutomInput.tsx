import React from "react";
import { View, TextInput } from "react-native";

import { SvgProps } from "react-native-svg";

type Props = {
  placeHolder: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur: (field: string) => void;
  Icon?: React.FC<SvgProps>;
};

const CustomInput = ({
  placeHolder,
  value,
  onChangeText,
  onBlur,
  Icon,
}: Props) => {

  return (
    <View className="w-full relative flex flex-row  bg-input_bg border border-border_color  items-center rounded-lg  ">
      {Icon && (
        <View className="pl-[15px] ">
          <Icon width={20} height={20} color="#7B6F72" />
        </View>
      )}
      <TextInput
        className=" pl-2.5  h-12 max-w-fit text-[12px] font-normal leading-[18px] font-poppinsRegular "
        placeholder={placeHolder}
        value={value}
        onChangeText={onChangeText}
        onBlur={() => onBlur(placeHolder)}
        placeholderTextColor="#ADA4A5"
      />
    </View>
  );
};

export default CustomInput;
