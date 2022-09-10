import { Todo } from './todo';

export type GetTodosResponse = Readonly<{
  todos: Todo[];
}>;

export type AddTodoRequest = Readonly<{
  name: string;
}>;

export type AddTodoResponse = Todo;

export type CompleteTodoRequest = Readonly<{
  id: string;
}>;

export type CompleteTodoResponse = Todo;
