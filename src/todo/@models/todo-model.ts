import { Observable } from 'rxjs';
import {
  AddTodoRequest,
  AddTodoResponse,
  CompleteTodoRequest,
  CompleteTodoResponse,
  GetTodosResponse,
} from '../@types/todo-http';

export interface TodoModel {
  getTodos(): Observable<GetTodosResponse>;
  addTodo(request: AddTodoRequest): Observable<AddTodoResponse>;
  completeTodo(request: CompleteTodoRequest): Observable<CompleteTodoResponse>;
}
