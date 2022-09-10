import { Todo } from './todo';

export type GetTodosResponse = Readonly<{
  todos: Todo[];
}>;

export type AddTodoRequest = Readonly<{
  name: string;
}>;

export type AddTodoResponse = Readonly<Todo>;

export type CompleteTodoRequest = Readonly<{
  id: string;
}>;

export type CompleteTodoResponse = Readonly<Todo>;
