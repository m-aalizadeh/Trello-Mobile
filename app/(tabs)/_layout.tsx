import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

const TabLayout = () => {
  const router = useRouter();
  const goHome = () => {
    router.push("/"); // Navigate to home (adds to history)
  };
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerStyle: {
          backgroundColor: "#0e86d4",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerLeft: () => (
          <TouchableOpacity onPress={goHome}>
            <FontAwesome name="home" size={24} color="white" />
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Boards",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="board/[id]"
        options={{
          title: "Cards",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="tasks" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
