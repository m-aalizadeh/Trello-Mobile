import Card from "@/components/Card";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList, Todo } from "../../types";
type Props = NativeStackScreenProps<RootStackParamList, "todos">;

const mockTasks: Todo[] = [
  {
    id: "1",
    title: "Buy groceries",
    description: "Milk, eggs, bread, fruits",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Call mom",
    completed: true,
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Finish React Native app",
    description: "Implement all features and test",
    completed: false,
    createdAt: new Date(),
  },
];
const Cards: React.FC<Props> = ({ route, navigation }) => {
  // const { boardTitle } = route.params;
  const boardTitle = "My Board";
  const [tasks, setTasks] = useState<Todo[]>(mockTasks);

  const handleToggleTask = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white px-6 py-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800">{boardTitle}</Text>
        <View className="flex-row items-center mt-1">
          <Text className="text-gray-600">
            {completedTasks} of {totalTasks} tasks completed
          </Text>
          {totalTasks > 0 && (
            <View className="ml-3 bg-blue-100 px-2 py-1 rounded-full">
              <Text className="text-xs text-blue-800 font-medium">
                {Math.round((completedTasks / totalTasks) * 100)}%
              </Text>
            </View>
          )}
        </View>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card task={item} onToggle={handleToggleTask} />
        )}
        contentContainerStyle={{ paddingVertical: 16 }}
        ListEmptyComponent={
          <View className="items-center justify-center p-8">
            <Text className="text-gray-500">No tasks in this board</Text>
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

export default Cards;
//       <TouchableOpacity
//         className="absolute bottom-6 right-6 bg-blue-500 w-14 h-14 rounded-full items-center justify-center shadow-lg"
//         onPress={() => {
//           /* Add new task functionality */
//         }}
//       >
//         <Text className="text-white text-2xl">+</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
