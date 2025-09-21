import React from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import { Todo } from "../types";

interface TaskCardProps {
  task: Todo;
  onToggle: (taskId: string) => void;
}
const Card: React.FC<TaskCardProps> = ({ task, onToggle }) => {
  return (
    <TouchableOpacity
      className={`bg-white p-4 rounded-lg border-l-4 mb-3 mx-4 ${
        task.completed ? "border-l-green-500 opacity-75" : "border-l-blue-500"
      }`}
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-1">
          <Text
            className={`text-base font-medium ${
              task.completed ? "text-gray-500 line-through" : "text-gray-800"
            }`}
          >
            {task.title}
          </Text>
          {task.description && (
            <Text className="text-sm text-gray-600 mt-1">
              {task.description}
            </Text>
          )}
          <Text className="text-xs text-gray-400 mt-2">
            Created: {task.createdAt.toLocaleDateString()}
          </Text>
        </View>
        <Switch
          value={task.completed}
          onValueChange={() => onToggle(task.id)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={task.completed ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
