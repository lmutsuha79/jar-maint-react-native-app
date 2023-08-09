import { Stack, Tabs } from "expo-router";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import tw from "tailwind-react-native-classnames";
import { Text, View } from "react-native";
import { Provider } from "../../context/auth-context";

export default function Layout() {
  return (
    <Provider>
      <>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <Tabs screenOptions={{ headerShown: false }}>
          {/* <Tabs.Screen
          // Name of the route to hide.
          name="onBoarding"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        /> */}
          <Tabs.Screen
            name="home"
            options={{
              activeTintColor: "red", // Change the text color of the active tab
              inactiveTintColor: "green", // Change the text color of inactive tabs
              tabBarStyle: {
                paddingVertical: 8,
                height: 70,
                backgroundColor: "white", // Change the background color of the tab bar
              },
              // tabBarItemStyle: {

              // }
              // tabBarBackground: () => (<View className="bg-red-400"></View>),

              tabBarLabel: "Home",
              title: "Home",
              tabBarLabelStyle: { color: "#285482" },

              tabBarIcon: ({ color, focused }) => (
                <FontAwesome5Icon
                  size={24}
                  style={{
                    // marginBottom: -3,
                    color: focused ? "#f4cc25" : "#285482",
                    backgroundColor: focused ? "#285482" : "transparent",
                    padding: 12,
                    borderRadius: 9999,
                  }}
                  name="home"
                />
              ),
            }}
          />
          <Tabs.Screen
            name="categories"
            options={{
              activeTintColor: "red", // Change the text color of the active tab
              inactiveTintColor: "green", // Change the text color of inactive tabs
              tabBarStyle: {
                paddingVertical: 8,
                height: 70,
                backgroundColor: "white", // Change the background color of the tab bar
              },
              // tabBarItemStyle: {

              // }
              // tabBarBackground: () => (<View className="bg-red-400"></View>),

              tabBarLabel: "Categories",
              title: "Categories",
              tabBarLabelStyle: { color: "#285482" },

              tabBarIcon: ({ color, focused }) => (
                <FontAwesome5Icon
                  size={24}
                  style={{
                    color: focused ? "#f4cc25" : "#285482",
                    backgroundColor: focused ? "#285482" : "transparent",
                    padding: 12,
                    borderRadius: 9999,
                  }}
                  name="table"
                />
              ),
            }}
          />

          <Tabs.Screen
            name="booking"
            options={{
              activeTintColor: "red", // Change the text color of the active tab
              inactiveTintColor: "green", // Change the text color of inactive tabs
              tabBarStyle: {
                paddingVertical: 8,
                height: 70,
                backgroundColor: "white", // Change the background color of the tab bar
              },
              // tabBarItemStyle: {

              // }
              // tabBarBackground: () => (<View className="bg-red-400"></View>),

              tabBarLabel: "Booking",
              title: "Booking",
              tabBarLabelStyle: { color: "#285482" },

              tabBarIcon: ({ color, focused }) => (
                <FontAwesome5Icon
                  size={24}
                  style={{
                    color: focused ? "#f4cc25" : "#285482",
                    backgroundColor: focused ? "#285482" : "transparent",
                    padding: 12,
                    borderRadius: 9999,
                  }}
                  name="calendar-plus"
                />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              activeTintColor: "red", // Change the text color of the active tab
              inactiveTintColor: "green", // Change the text color of inactive tabs
              tabBarStyle: {
                paddingVertical: 8,
                height: 70,
                backgroundColor: "white", // Change the background color of the tab bar
              },
              // tabBarItemStyle: {

              // }
              // tabBarBackground: () => (<View className="bg-red-400"></View>),

              tabBarLabel: "Profile",
              title: "Profile",
              tabBarLabelStyle: { color: "#285482" },

              tabBarIcon: ({ color, focused }) => (
                <FontAwesome5Icon
                  size={24}
                  style={{
                    color: focused ? "#f4cc25" : "#285482",
                    backgroundColor: focused ? "#285482" : "transparent",
                    padding: 12,
                    borderRadius: 9999,
                  }}
                  name="user"
                />
              ),
            }}
          />
        </Tabs>
      </>
    </Provider>
  );
}
