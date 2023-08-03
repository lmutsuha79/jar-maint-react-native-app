import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import tailwind from "tailwind-react-native-classnames";

export default function HomeHeader({ name, avatar, location }) {
  return (
    <View className="flex flex-row items-center justify-between ">
      {/* avatar + name + location */}
      <View>
        <View className="flex flex-row items-center gap-2">
          <Image
            source={{
              uri: avatar,
            }}
            className="inline-block h-[50px] w-[50px] rounded-full ring-2 ring-white"
          />
          <View>
            <View className=" text-main-dark flex flex-row items-center gap-1 ">
              <Text className="font-bold text-lg">Hi,</Text>
              <Text className="text-lg font-medium">{name}</Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <FontAwesome5Icon name="map-marker-alt" color={"#f4cc25"} />
              <Text className="text-main-blue ">{location}</Text>
            </View>
          </View>
        </View>
      </View>
      {/* notification bell */}
      <TouchableOpacity>
        <FontAwesome5Icon
          name="bell"
          style={{
            color: "#f4cc25",
            backgroundColor: "#285482",
            borderRadius: 9999,
            padding: 16,
          }}
          size={18}
        />
      </TouchableOpacity>
    </View>
  );
}
