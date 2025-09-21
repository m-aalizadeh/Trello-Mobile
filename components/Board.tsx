import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Board } from "../types";

interface BoardCardProps {
  board: Board;
  onPress: () => void;
}

const BoardScreen: React.FC<BoardCardProps> = ({ board, onPress }) => {
  const completedTasks = board.todos.filter((todo) => todo.completed).length;
  const totalTasks = board.todos.length;

  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-3 mx-4"
    >
      <Text className="text-lg font-semibold text-gray-800 mb-2">
        {board.title}
      </Text>
      {board.description && (
        <Text className="text-gray-600 mb-3">{board.description}</Text>
      )}
      <View className="flex-row justify-between items-center">
        <Text className="text-sm text-gray-500">
          {totalTasks} tasks • {completedTasks} completed
        </Text>
        <View className="bg-blue-100 px-2 py-1 rounded-full">
          <Text className="text-xs text-blue-800 font-medium">
            {totalTasks > 0
              ? Math.round((completedTasks / totalTasks) * 100)
              : 0}
            %
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BoardScreen;
