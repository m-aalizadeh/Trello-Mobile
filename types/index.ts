export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
}

export interface Board {
  id: string;
  title: string;
  description?: string;
  todos: Todo[];
  createdAt: Date;
}

export type RootStackParamList = {
  Boards: undefined;
  todos: { boardId: string; boardTitle: string };
};
