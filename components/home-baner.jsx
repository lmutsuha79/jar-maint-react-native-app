import {
  View,
  Text,
  Image,
  Button,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

export default function HomeBaner() {
  return (
    <View className="mt-4">
      <Text className="font-medium text-main-blue text-xl mb-2">
        Special Offers
      </Text>
      <ScrollView horizontal className="gap-2 ">
        <TouchableOpacity className="w-[300px] h-[200px] mt-2 rounded-md overflow-hidden relative">
          <Image
            resizeMode="stretch"
            source={{
              uri: "https://jar-shop.com/wp-content/uploads/2023/07/Bronze-Blue-Simple-Professional-Air-Conditioner-Repair-Service-Ads-Banner--1024x512.png",
            }}
            className="w-full h-full"
          />
          <View className="absolute top-0 left-0 w-full h-full bg-main-blue/20"></View>
        </TouchableOpacity>

        <TouchableOpacity className="w-[300px] h-[200px] mt-2 rounded-md overflow-hidden relative">
          <Image
            resizeMode="stretch"
            source={{
              uri: "https://jar-shop.com/wp-content/uploads/2023/07/Blue-Minimalist-Cleaning-Service-Landscape-Banner-1-1024x512.png",
            }}
            className="w-full h-full"
          />
          <View className="absolute top-0 left-0 w-full h-full bg-main-blue/20"></View>
        </TouchableOpacity>

        <TouchableOpacity className="w-[300px] h-[200px] mt-2 rounded-md overflow-hidden relative">
          <Image
            resizeMode="stretch"
            source={{
              uri: "https://jar-shop.com/wp-content/uploads/2023/07/Blue-and-Yellow-Gradient-Illustrative-Plumbing-Services-Facebook-Ad.png",
            }}
            className="w-full h-full"
          />
          <View className="absolute top-0 left-0 w-full h-full bg-main-blue/20"></View>
        </TouchableOpacity>
        <TouchableOpacity className="w-[300px] h-[200px] mt-2 rounded-md overflow-hidden relative">
          <Image
            resizeMode="stretch"
            source={{
              uri: "https://i.redd.it/top-hvac-company-in-nyc-air-conditioning-repair-and-service-v0-lvg7qiikcnua1.jpg?width=410&format=pjpg&auto=webp&s=d12be85973faa334fa070430a88a578012050ae7",
            }}
            className="w-full h-full"
          />
          <View className="absolute top-0 left-0 w-full h-full bg-main-blue/20">
            <View className="flex justify-between h-full px-2 py-4">
              <View>
                <Text className="text-4xl font-medium text-white">30% OFF</Text>
                <Text className="text-lg font-medium text-white">
                  For all air conditioning services
                </Text>
              </View>

              {/* book now button */}
              <TouchableOpacity>
                <Pressable className="bg-main-yellow font-medium text-xl rounded-md p-2 flex flex-row items-center justify-center w-[130px]">
                  <Text className="text-main-blue text-lg font-medium ">
                    Book Now
                  </Text>
                </Pressable>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
