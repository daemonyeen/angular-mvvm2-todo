import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../@types/todo';
import {
  AddTodoRequest,
  AddTodoResponse,
  CompleteTodoRequest,
  CompleteTodoResponse,
  GetTodosResponse,
} from '../@types/todo-http';
import { TodoModel } from './todo-model';

@Injectable()
export class TodoModelService implements TodoModel {
  constructor(private readonly http: HttpClient) {}

  getTodos(): Observable<GetTodosResponse> {
    return this.http.get<GetTodosResponse>('/todos');
  }

  addTodo(request: AddTodoRequest): Observable<AddTodoResponse> {
    return this.http.post<AddTodoResponse>('/todo', { name });
  }

  completeTodo(request: CompleteTodoRequest): Observable<CompleteTodoResponse> {
    return this.http.put<CompleteTodoResponse>('/todo/complete', request);
  }
}
