import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoListComponentModule } from '../domains/todo/@views/todo-list/todo-list.module';
import { TodoAppComponent } from './index.component';

@NgModule({
  imports: [CommonModule, TodoListComponentModule],
  declarations: [TodoAppComponent],
})
export class TodoAppComponentModule {}
