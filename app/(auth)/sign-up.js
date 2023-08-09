import { View, Text, TextInput, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import { i18n } from "../../util/tranlation";
import { router } from "expo-router";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    title: "",
    description: "",
  });
  const [showOverlay, setShowOverlay] = useState(false); // State for overlay
  const isEmailValid = (email) => {
    // Basic email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSingUp = () => {
    if (!isEmailValid(email)) {
      // If email is not valid, show an error message or handle it as needed
      console.log("Invalid email");
      setErrorMessage({
        title: "Invalid email",
        description: "Please enter a valid email address",
      });
      setShowOverlay(true);
      return;
    }

    // Perform singUp with valid email and password
  };
  const removeErrorMdal = () => {
    setErrorMessage({ title: "", description: "" });
    setShowOverlay(false);
  };
  return (
    <>
      <Modal visible={showOverlay} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View className="bg-main-yellow p-8 rounded-lg">
            <Text className="mb-2 text-xl font-bold text-main-blue">
              {errorMessage.title}
            </Text>
            <Text className="text-main-dark ">{errorMessage.description}</Text>
            <Pressable
              onPress={removeErrorMdal}
              className="mt-4 h-12 bg-main-blue rounded-md flex flex-row justify-center items-center px-6"
            >
              <View className="flex-1 flex items-center">
                <Text className="text-main-yellow text-base font-medium">
                  Try Again
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View className="flex-1 items-center justify-center bg-main-blue">
        <View className="p-8 w-full max-w-sm">
          <Text className="text-lg mb-1 font-medium  text-white">
            {i18n.t("Welcome to our app")}
          </Text>
          <Text className="text-5xl font-bold mb-6 text-main-yellow">
            {i18n.t("SingUp")}
          </Text>
          <View className="space-y-4">
            {/* email input */}
            <TextInput
              className="w-full bg-white border border-slate-200 rounded-md h-12 px-4 "
              placeholderTextColor="#285482"
              placeholder={i18n.t("Enter email address")}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />

            {/* password */}
            <TextInput
              className="w-full bg-white border border-slate-200 rounded-md h-12 px-4"
              placeholderTextColor="#285482"
              placeholder={i18n.t("Enter password")}
              onChangeText={(text) => setPassword(text)} // Update email state
              value={password} // Bind input value to email state
            />

            {/* confirme password */}
            <TextInput
              className="w-full bg-white border border-slate-200 rounded-md h-12 px-4"
              placeholderTextColor="#285482"
              placeholder={i18n.t("Confirme the password")}
              onChangeText={(text) => setConfirmePassword(text)} // Update email state
              value={confirmePassword} // Bind input value to email state
            />
          </View>

          <View className="flex flex-row justify-start items-centers my-6">
            <Pressable>
              <Text className="text-white font-light">
                {i18n.t(
                  "By signing up, you're agree to our Term & Condition and Privacy Policy"
                )}
              </Text>
            </Pressable>
          </View>

          <Pressable
            onPress={handleSingUp}
            className="h-12 bg-main-yellow rounded-md flex flex-row justify-center items-center px-6"
          >
            <View className="flex-1 flex items-center">
              <Text className="text-main-blue text-base font-medium">
                {i18n.t("Continue")}
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => router.push("sign-in")}
            className="h-12 mt-2  rounded-md flex flex-row justify-center items-center px-6"
          >
            <View className="flex-1 flex items-center">
              <Text className="text-main-yellow text-base font-medium">
                {i18n.t("You Already Have an Account? SignIn")}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
}
