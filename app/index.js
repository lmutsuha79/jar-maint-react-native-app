import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <Redirect href={"/onBoarding"}/>
    // <View>
    //   <Text>hello</Text>
    // </View>
  );
}
