import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '../../@types/todo';

@Component({
  selector: 'todo',
  template: `<div [class.completed]="todo.isCompleted">{{todo.name}}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Input() todo: Todo;
}
