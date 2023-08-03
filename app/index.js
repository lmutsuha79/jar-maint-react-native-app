import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";
import { readData } from "../util/readData";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeData } from "../util/storeData";

export default function Page() {
  const [showOnBoarding, setShowOnBoarding] = useState(false);
  const checkIfAllreadyOnBoarding = async () => {
    // await storeData("onBoardingAllreadyVisited", "0");
    try {
      const value = await AsyncStorage.getItem("onBoardingAllreadyVisited");
      if (value !== null) {
        console.log("getting the data successfully");
        console.log(value);
        if (value == "1") {
          setShowOnBoarding(false);
        }
        if (value == "0") {
          setShowOnBoarding(true);
        }
      } else {
        // on boarding is null
        storeData("onBoardingAllreadyVisited", "0");
        setShowOnBoarding(true);
      }
    } catch (e) {
      console.error(e);
      // error reading value
    }
  };
  useEffect(() => {
    checkIfAllreadyOnBoarding();
  }, []);

  if (showOnBoarding) {
    return <Redirect href={"/onBoarding"} />;
  }
  return (
    <View>
      <Text>hello world </Text>
    </View>
  );
}
