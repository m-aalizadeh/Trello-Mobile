import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  const router = useRouter();
  const handleBoardPress = () => {
    router.replace("/(tabs)");
  };

  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      <View className="items-center mb-4">
        <Text className="font-bold text-xl">Welcome to Trello!!</Text>
      </View>
      <TouchableOpacity
        className="p-3 border border-gray-200 rounded-lg"
        onPress={handleBoardPress}
      >
        <Text className="text-white text-lg font-semibold">
          Let's Plan your time
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
