import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function CategorieItem({ title, icon }) {
  return (
    <TouchableOpacity
      style={{ width: 30 + "%", margin: 1.5 + "%" }}
      className=" overflow-hidden bg-main-blue rounded-md p-4 flex  items-center "
    >
      <Image source={icon} className=" h-[70px] w-[90%]" />
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        className="text-left  text-main-yellow font-medium mt-2"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
