import { useAuth } from "../../context/auth-context";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { i18n } from "../../util/tranlation";
import { useState } from "react";
import { router } from "expo-router";

export default function SignIn() {
  const { signIn } = useAuth();

  const [loadingState, setLoadingState] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    title: "",
    description: "",
  });
  const [showErrorMoadal, setShowErrorModal] = useState(false); // State for overlay
  const isEmailValid = (email) => {
    // Basic email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const removeErrorMdal = () => {
    setErrorMessage({ title: "", description: "" });
    setShowErrorModal(false);
  };
  const handleLogin = async () => {
    if (email.trim() === "" || password === "") {
      // If email or password is empty, show an error message or handle it as needed
      setErrorMessage({
        title: "Empty fields",
        description: "Please enter both email and password",
      });
      setShowErrorModal(true);
      return;
    }
  
    if (!isEmailValid(email)) {
      // If email is not valid, show an error message or handle it as needed
      console.log("Invalid email");
      setErrorMessage({
        title: "Invalid email address",
        description: "Please enter a valid email address",
      });
      setShowErrorModal(true);
      return;
    }
  
    // Perform login with valid email and password
    try {
      setLoadingState(true);
      const signInResult = await signIn(email, password);
  
      if (signInResult.user) {
        console.log("User signed in:", signInResult.user);
        // You can perform further actions with the signed-in user
      } else if (signInResult.error) {
        setShowErrorModal(true);
  
        const errorCode = signInResult.error.code;
        const errorMessage = signInResult.error.message;
  
        let errorTitle = "Login Error";
        let errorDescription = errorMessage;
        switch (errorCode) {
          case "auth/invalid-email":
            errorDescription = "Invalid email format";
            break;
          case "auth/user-disabled":
            errorDescription = "User account is disabled";
            break;
          case "auth/user-not-found":
            errorDescription = "User not found, you can SignUp instead";
            break;
          case "auth/wrong-password":
            errorDescription = "Invalid email or password";
            break;
          // Handle other error cases as needed
  
          default:
            // Use the default error message
            break;
        }
        setErrorMessage({
          title: errorTitle,
          description: errorDescription,
        });
      }
    } catch (error) {
      // console.error("An unexpected error occurred:", error);
      setErrorMessage({
        title: "Login Error",
        description: "An unexpected error occurred",
      });
  
      // Handle any unexpected errors that occur during authentication
    }
    setLoadingState(false);
  };
  
  return (
    <>
      <Modal visible={loadingState} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="#f4cc25" />
          <Text className="text-main-yellow mt-2 text-lg">
            {i18n.t("Loading")}
          </Text>
        </View>
      </Modal>
      <Modal visible={showErrorMoadal} transparent>
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
      <View className="flex-1 items-center justify-center bg-main-yellow">
        <View className="p-8 w-full max-w-sm">
          <Text className="text-lg mb-1 font-medium  text-main-dark">
            {i18n.t("Welcome Back!")}
          </Text>
          <Text className="text-5xl font-bold mb-6 text-main-blue">
            {i18n.t("Login")}
          </Text>
          {/* email input */}
          <TextInput
            className="w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4"
            placeholderTextColor="#285482"
            placeholder={i18n.t("Enter email address")}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />

          {/* password */}
          <TextInput
            secureTextEntry
            className="w-full bg-white border border-slate-200 rounded-md h-12 px-4"
            placeholderTextColor="#285482"
            placeholder={i18n.t("Enter password")}
            onChangeText={(text) => setPassword(text)} // Update email state
            value={password} // Bind input value to email state
          />

          <View className="flex flex-row justify-end items-center my-8">
            <Pressable>
              <Text className="text-main-blue font-bold">
                {i18n.t("Reset password")}
              </Text>
            </Pressable>
          </View>
          {/* login but */}
          <Pressable
            onPress={handleLogin}
            className="h-12 bg-main-blue rounded-md flex flex-row justify-center items-center px-6"
          >
            <View className="flex-1 flex items-center">
              <Text className="text-main-yellow text-base font-medium">
                {i18n.t("Login")}
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => router.push("sign-up")}
            className="h-12 mt-2  rounded-md flex flex-row justify-center items-center px-6"
          >
            <View className="flex-1 flex items-center">
              <Text className="text-main-blue text-base font-medium">
                {i18n.t("You don't have an account ? Sign up")}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
}
