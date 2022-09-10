import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Writeable } from '../../@common/utils/writeable';
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
  /**
   * In this example the server is emulated, in real-world
   * application we better want to call actual API calls
   */
  private todos: Todo[] = [
    {
      id: 'buy-milk',
      name: 'Buy milk',
      isCompleted: false,
    },
    {
      id: 'walk-the-dog',
      name: 'Walk the dog',
      isCompleted: false,
    },
    {
      id: 'watch-new-episide',
      name: 'Watch new episode',
      isCompleted: false,
    },
  ];

  constructor(private readonly http: HttpClient) {}

  getTodos(): Observable<GetTodosResponse> {
    return of({
      todos: this.todos,
    });
  }

  addTodo(request: AddTodoRequest): Observable<AddTodoResponse> {
    const { name } = request;
    const todo = {
      id: name.toLowerCase().split(' ').join('_'),
      name,
      isCompleted: false,
    };

    this.todos = [...this.todos, todo];

    return of(todo);
  }

  completeTodo(request: CompleteTodoRequest): Observable<CompleteTodoResponse> {
    const todo = this.todos.find(
      (todo) => todo.id === request.id
    ) as Writeable<Todo>;

    if (!todo) {
      return null;
    }

    todo.isCompleted = true;

    return todo as Readonly<Todo>;
  }
}
