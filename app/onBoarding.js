import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";
import Onboarding from "react-native-onboarding-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import { i18n } from "../util/tranlation";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { storeData } from "../util/storeData";

export default function onBoardin() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const handleDone = async () => {
    await storeData("onBoardingAllreadyVisited", "1");
    router.push("/auth");
    
  };
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Onboarding
        onDone={handleDone}
        nextLabel={i18n.t("next")}
        skipLabel={i18n.t("skip")}
        pages={[
          {
            backgroundColor: "#285482",
            image: (
              <SafeAreaView className="relative flex justify-between space-y-4">
                <View
                  style={{
                    width: windowWidth,
                    height: windowWidth,
                  }}
                  className={` flex flex-row items-center justify-center overflow-hidden`}
                >
                  <Image
                    source={require("../assets/onBoarding/jiji.png")}
                    resizeMode="contain"
                    className="w-full h-full"
                    // className={`w-[${windowWidth}] h-[70%] flex flex-row items-center justify-center`}
                    // width={300}
                    // height={300}
                  />
                </View>
                <View className="flex items-center justify-center gap-4 px-4">
                  <Text className="text-main-yellow text-4xl font-medium">
                    {i18n.t("appName")}
                  </Text>
                  <Text className="text-white font-bold text-2xl text-center ">
                    {i18n.t("Find Your On-Demand Service Worker")}
                  </Text>
                  <Text className="text-white font-light text-center ">
                    {i18n.t(
                      "We provide better service for you with our on-demand service app"
                    )}
                  </Text>
                </View>
              </SafeAreaView>
            ),
            title: "",
            subtitle: "",
          },
          {
            backgroundColor: "#f4cc25",
            image: (
              <SafeAreaView className="relative flex justify-between space-y-4">
                <View
                  style={{
                    width: windowWidth,
                    height: windowWidth,
                  }}
                  className={` flex flex-row items-center justify-center overflow-hidden`}
                >
                  <Image
                    source={require("../assets/onBoarding/second.png")}
                    resizeMode="contain"
                    className="w-full h-full"
                    // className={`w-[${windowWidth}] h-[70%] flex flex-row items-center justify-center`}
                    // width={300}
                    // height={300}
                  />
                </View>
                <View className="flex items-center justify-center gap-4 px-4">
                  <Text className="text-main-blue text-4xl font-medium">
                    {i18n.t("Easy Booking")}
                  </Text>
                  <Text className="text-main-dark font-bold text-2xl text-center ">
                    {i18n.t("Book your preferred service effortlessly")}
                  </Text>
                  <Text className="text-main-dark font-light text-center ">
                    {i18n.t(
                      "Just choose a category, provide details, and schedule a time that suits you best"
                    )}
                  </Text>
                </View>
              </SafeAreaView>
            ),
            title: "",
            subtitle: "",
          },
          {
            backgroundColor: "#181818",
            image: (
              <SafeAreaView className="relative flex justify-between space-y-4">
                <View
                  style={{
                    width: windowWidth,
                    height: windowWidth,
                  }}
                  className={` flex flex-row items-center justify-center overflow-hidden`}
                >
                  <Image
                    source={require("../assets/onBoarding/third.png")}
                    resizeMode="contain"
                    className="w-full h-full"
                  />
                </View>
                <View className="flex items-center justify-center gap-4 px-4">
                  <Text className="text-main-yellow text-4xl font-medium">
                    {i18n.t("Stay Informed")}
                  </Text>
                  <Text className="text-white font-bold text-2xl text-center ">
                    {i18n.t("Track your service status in real-time")}
                  </Text>
                  <Text className="text-white font-light text-center ">
                    {i18n.t(
                      "Receive notifications when an agent is assigned and when they are on their way"
                    )}
                  </Text>
                </View>
              </SafeAreaView>
            ),
            title: "",
            subtitle: "",
          },
          {
            backgroundColor: "#28548250",
            image: (
              <SafeAreaView className="relative flex justify-between space-y-4">
                <View
                  style={{
                    width: windowWidth,
                    height: windowWidth,
                  }}
                  className={` flex flex-row items-center justify-center overflow-hidden`}
                >
                  <Image
                    source={require("../assets/onBoarding/fourth.png")}
                    resizeMode="contain"
                    className="w-full h-full"
                  />
                </View>
                <View className="flex items-center justify-center gap-4 px-4">
                  <Text className="text-main-blue text-4xl font-medium">
                    {i18n.t("Explore Great Offers")}
                  </Text>
                  <Text className="text-main-dark font-bold text-2xl text-center ">
                    {i18n.t("Get the best deals tailored for you!")}
                  </Text>
                  <Text className="text-main-dark font-light text-center ">
                    {i18n.t(
                      "Discover exciting offers and discounts on our home maintenance services"
                    )}
                  </Text>
                </View>
              </SafeAreaView>
            ),
            title: "",
            subtitle: "",
          },
        ]}
      />
    </>
  );
}
