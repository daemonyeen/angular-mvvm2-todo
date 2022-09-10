import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { TodoViewModel } from '../../@view-models.ts/todo-view-model';
import { TodoListView } from './todo-list-view';

@Component({
  selector: 'todo-list',
  template: `
      <ul>
          <li *ngFor="let todo of $.todos$ | async">
              <todo [todo]="todo"></todo>
          </li>
      </ul>
  `,
})
export class TodoListComponent implements TodoListView, OnDestroy {
  onDestroy$ = new Subject<void>();

  constructor(readonly $: TodoViewModel) {
    $.register(this);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
