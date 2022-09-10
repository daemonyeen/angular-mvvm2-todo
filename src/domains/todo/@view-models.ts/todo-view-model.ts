import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ViewModel } from '../../@common/core/view-model';
import { TodoModel } from '../@models/todo-model';
import { Todo } from '../@types/todo';
import { TodoListView } from '../@views/todo-list/todo-list-view';

@Injectable({ providedIn: 'root' })
export class TodoViewModel extends ViewModel<TodoListView> {
  todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(private readonly model: TodoModel) {
    super();
  }

  override register(view: TodoListView) {
    super.register(view);

    this.model
      .getTodos()
      .pipe(takeUntil(this.view.onDestroy$))
      .subscribe((response) => {
        this.todos$.next(response.todos);
      });
  }
}
