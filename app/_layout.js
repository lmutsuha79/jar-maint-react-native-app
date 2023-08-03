import { Stack, Tabs } from "expo-router";

export default function Layout() {


  return (
    // <Tabs/>
    <Stack>
      <Stack.Screen name="screens" />

      {/* <Stack.Screen
        name="index"
        options={{
          // Hide the header for all other routes.
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="modal"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      /> */}
    </Stack>
  );
}
