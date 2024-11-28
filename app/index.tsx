import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenLayout from "@/components/ScreenLayout";
import { Formik } from "formik";
import { loginValidationScehma } from "@/ValidationSchema /schema";
import Profile from "@/assets/images/profile.svg";
import Message from "@/assets/images/Message.svg";
import Lock from "@/assets/images/lock.svg";

import CustomInput from "@/components/CutomInput";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import Google from "@/assets/images/google.svg";
import Facebook from "@/assets/images/facebook.svg";
import { Link } from "expo-router";

export default function Index() {
  const [isChecked, setIsChecked] = useState(false);
  const register = () => {
    console.log("clicked");
  };
  return (
    <ScreenLayout>
      <View style={{ flex: 1 }}>
        <View className="title-section mx-61 flex flex-col justify-center items-center font-poppinsRegular">
          <Text className="text-base leading-6 font-normal">Hey there,</Text>
          <Text className="font-poppinsBold text-xl font-bold leading-7">
            Create an Account
          </Text>
        </View>
        <View
          className="flex flex-col justify-between"
          style={{ flex: 1 }}
        >
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={loginValidationScehma}
            onSubmit={(values) => {
              console.log("Form values", values);
            }}
          >
            {({
              handleChange,
              handleBlur,
              errors,
              handleSubmit,
              values,
              touched,
            }) => (
              <>
                <View className="mt-[30px] flex flex-col ">
                  <CustomInput
                    placeHolder="First Name"
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur}
                    value={values.firstName}
                    Icon={Profile}
                  />
                  <View className="mb-[15px]" />
                  <CustomInput
                    placeHolder="Last Name"
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur}
                    value={values.lastName}
                    Icon={Profile}
                  />
                  <View className="mb-[15px]" />
                  <CustomInput
                    placeHolder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur}
                    value={values.email}
                    Icon={Message}
                  />
                  <View className="mb-[15px]" />
                  <CustomInput
                    placeHolder="Password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur}
                    value={values.password}
                    Icon={Lock}
                  />

                  <View className="mb-[10px] " />
                  <View className=" flex flex-row items-center gap-[10px]">
                    <Checkbox
                      value={isChecked}
                      onValueChange={setIsChecked}
                      className="w-4 h-4 border border-gray_2"
                    />
                    <View className="flex-1">
                      <Text className="text-gray_2 text-[10px] leading-4">
                        By continuing, you accept our
                        <Text className="underline"> Privacy Policy </Text>
                        and
                        <Text className="underline">Terms of use.</Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </>
            )}
          </Formik>
          <View>
            <Pressable
              className="w-full bg-slate-400 h-14 flex items-center justify-center rounded-full "
              onPress={() => console.log("presss")}
            >
              <Text className="text-base leading-6 font-bold text-white">
                Register
              </Text>
            </Pressable>
          </View>
        </View>
        <View className="flex flex-row items-center my-2">
          <View className="flex-1 h-px bg-gray_3"></View>
          <Text className="px-2 text-black_variant text-sm font-medium">
            Or
          </Text>
          <View className="flex-1 h-px bg-gray_3"></View>
        </View>
        <View className=" h-[50px] flex items-center justify-center flex-row ">
          <View className="flex flex-row gap-[30px]">
            <View className="border border-gray_3 w-[50px] h-[50px] flex justify-center items-center rounded-xl">
              <Google width={20} height={20} />
            </View>
            <View className="border border-gray_3 w-[50px] h-[50px] flex justify-center items-center rounded-xl">
              <Facebook width={20} height={20} />
            </View>
          </View>
        </View>
        <View className="flex flex-row justify-center mb-10 mt-8">
          <Text className="font-poppinsRegular text-sm font-normal">
            Already have a Account ?
          </Text>
          <Link
            className="font-poppinsRegular text-sm font-normal text-purple-500 "
            href="/"
          >
            Login
          </Link>
        </View>
      </View>
    </ScreenLayout>
  );
}
