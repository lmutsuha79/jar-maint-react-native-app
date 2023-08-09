import { Stack, Tabs } from "expo-router";

export default function Root() {
  return (
      <Stack>
        <Stack.Screen name="screens" />
      </Stack>
  );
}
