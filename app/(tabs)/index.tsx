import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import BoardScreen from "../../components/Board";
import { Board, RootStackParamList } from "../../types";
import "../global.css";

type Props = NativeStackScreenProps<RootStackParamList, "Boards">;

const mockBoards: Board[] = [
  {
    id: "1",
    title: "Personal Tasks",
    description: "Daily personal tasks and reminders",
    todos: [
      {
        id: "1-1",
        title: "Buy groceries",
        completed: false,
        createdAt: new Date(),
      },
      {
        id: "1-2",
        title: "Call mom",
        completed: true,
        createdAt: new Date(),
      },
    ],
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Work Projects",
    description: "Office work and project tasks",
    todos: [
      {
        id: "2-1",
        title: "Finish React Native app",
        completed: false,
        createdAt: new Date(),
      },
    ],
    createdAt: new Date(),
  },
];

const Index: React.FC<Props> = ({ navigation }) => {
  const router = useRouter();
  const [boards, setBoards] = useState<Board[]>(mockBoards);
  const handleBoardPress = (board: Board) => {
    router.replace(`/board/${board.id}`);
  };

  return (
    <View className="flex-1 bg-slate-200">
      <FlatList
        data={boards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BoardScreen onPress={() => handleBoardPress(item)} board={item} />
        )}
        contentContainerStyle={{ paddingVertical: 16 }}
        ListEmptyComponent={
          <View className="items-center justify-center p-8">
            <Text className="text-gray-500 font-bold">No Boards yet</Text>
          </View>
        }
      />
      <TouchableOpacity
        className="absolute bottom-6 right-6 bg-blue-500 w-14 h-14 rounded-full items-center justify-center shadow-lg"
        onPress={() => {}}
      >
        <Text className="text-white text-2xl">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
