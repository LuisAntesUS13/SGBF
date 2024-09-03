import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputFechaComponent } from './input-fecha/input-fecha.component';
import { PaginadorComponent } from './paginador/paginador.component';

@NgModule({
  declarations: [
    MenuComponent,
    InputFechaComponent,
    PaginadorComponent
  ],
  exports: [
    MenuComponent,
    InputFechaComponent,
    ReactiveFormsModule,
    PaginadorComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
