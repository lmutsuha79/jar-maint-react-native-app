import AsyncStorage from "@react-native-async-storage/async-storage";

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log("getting the data successfully");
      return value;
    }
  } catch (e) {
    console.error(e);
    // error reading value
  }
};
