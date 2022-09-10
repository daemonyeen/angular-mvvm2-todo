import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoComponentModule } from '../todo/todo-component.module';
import { TodoListComponent } from './todo-list.component';

@NgModule({
  imports: [CommonModule, TodoComponentModule],
  declarations: [TodoListComponent],
  exports: [TodoListComponent],
})
export class TodoListComponentModule {}
