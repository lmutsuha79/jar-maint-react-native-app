import { Stack, Slot } from "expo-router";
import { Provider } from "../../context/auth-context";

export default function Root() {
  return (
    <Provider>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Slot />
    </Provider>
  );
}
