import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  template: `
    <h1>Todos:</h1>
    <todo-list></todo-list>
  `,
})
export class TodoAppComponent {}
