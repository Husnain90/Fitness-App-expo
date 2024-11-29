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
import { Link, router, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter()
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
        <View className="flex flex-col justify-between" style={{ flex: 1 }}>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={loginValidationScehma}
            onSubmit={(values, errors) => {
              console.log("Form values", values);
              console.log("Formik state:", { values, errors });
              router.push("/goalScreen");
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
                  {errors.firstName && touched.firstName && (
                    <Text className="text-red-500">{errors.firstName}</Text>
                  )}
                  <View className="mb-[15px]" />
                  <CustomInput
                    placeHolder="Last Name"
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur}
                    value={values.lastName}
                    Icon={Profile}
                  />
                  {errors.lastName && touched.lastName && (
                    <Text className="text-red-500">{errors.lastName}</Text>
                  )}
                  <View className="mb-[15px]" />
                  <CustomInput
                    placeHolder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur}
                    value={values.email}
                    Icon={Message}
                  />
                  {errors.email && touched.email && (
                    <Text className="text-red-500">{errors.email}</Text>
                  )}
                  <View className="mb-[15px]" />
                  <CustomInput
                    placeHolder="Password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur}
                    value={values.password}
                    Icon={Lock}
                  />
                  {errors.password && touched.password && (
                    <Text className="text-red-500">{errors.password}</Text>
                  )}
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
                <View>
                  <Pressable onPress={()=>{router.push("/goalScreen")}}>
                    <LinearGradient
                      colors={["#9DCEFF", "#92A3FD"]}
                      className="w-full bg-slate-400 h-14 flex items-center justify-center rounded-full "
                      start={[0.1, 0.1]}
                      end={[1, 0]}
                    >
                      <Text className="text-base leading-6 font-bold text-white">
                        Register
                      </Text>
                    </LinearGradient>
                  </Pressable>
                </View>
              </>
            )}
          </Formik>
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
