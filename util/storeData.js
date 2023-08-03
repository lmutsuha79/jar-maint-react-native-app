import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("new item saved");
  } catch (e) {
    console.log(e);
  }
};
