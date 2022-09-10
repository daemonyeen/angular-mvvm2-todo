import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoListComponentModule } from '../domains/todo/@views/todo-list/todo-list-component.module';
import { TodoAppComponent } from './index.component';

@NgModule({
  imports: [CommonModule, TodoListComponentModule],
  declarations: [TodoAppComponent],
  exports: [TodoAppComponent],
})
export class TodoAppComponentModule {}
