import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodoComponent],
  exports: [TodoComponent],
})
export class TodoComponentModule {}
