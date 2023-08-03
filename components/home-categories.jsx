import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import tw from "tailwind-react-native-classnames";
import CategorieItem from "./categorie-item";

export default function HomeCategories() {
  return (
    <View className="mt-4">
      {/* title */}
      <View className="flex flex-row items-center justify-between mb-2">
        <Text className="font-medium text-main-blue text-xl">Categories</Text>
        <TouchableOpacity>
          <View className="flex flex-row items-center gap-1">
            <Text className="text-main-yellow font-medium">View All</Text>
            <FontAwesome5Icon
              name="arrow-right"
              style={[
                tw` `,
                {
                  color: "#f4cc25",
                },
              ]}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* search bar */}
      <View className="my-2 flex flex-row items-center gap-4">
        {/* <View className="border border-main-blue rounded-md h-12 bg-slate-200 "></View> */}
        <TextInput
          className="flex-grow border placeholder:text-red-600 border-main-blue rounded-md h-12 bg-slate-200 px-2"
          placeholder={"Search for home services"}
          placeholderTextColor={"#28548250"}
          // value={"value"}
          // onChangeText={onChangeText}
          // secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity>
          <FontAwesome5Icon
            name="search"
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

      {/* items */}
      <View className=" flex-row flex-wrap justify-center">
        <CategorieItem
          title={"plumber"}
          icon={require("../assets/categories/plumber.png")}
        />
        <CategorieItem
          title={"Electricity"}
          icon={require("../assets/categories/eco-house.png")}
        />
        <CategorieItem
          title={"Cleaning"}
          icon={require("../assets/categories/household.png")}
        />
        <CategorieItem
          title={"Repair"}
          icon={require("../assets/categories/mechanic.png")}
        />
        <CategorieItem
          title={"Painting"}
          icon={require("../assets/categories/varnish.png")}
        />
        <CategorieItem
          title={"Air conditioning "}
          icon={require("../assets/categories/air-conditioner.png")}
        />
        {/* <CategorieItem /> */}
        {/* <CategorieItem /> */}
      </View>
    </View>
  );
}
