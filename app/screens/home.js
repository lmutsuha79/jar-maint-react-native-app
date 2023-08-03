import { View, Text, Image, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import tailwind from "tailwind-react-native-classnames";
import HomeHeader from "../../components/home-header";
import HomeBaner from "../../components/home-baner";
import HomeCategories from "../../components/home-categories";

export default function Home() {
  return (
    <SafeAreaView className="px-4 py-2 bg-white">
    
      <View className="">
        <HomeHeader
          name={"zino bou abdalah"}
          location={"Sidi Bel Abbes"}
          avatar={
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        />
        <HomeBaner />
        <HomeCategories />
      </View>
    </SafeAreaView>
  );
}
