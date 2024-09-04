import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputFechaComponent } from './input-fecha/input-fecha.component';
import { PaginadorComponent } from './paginador/paginador.component';
import { BuscadorComponent } from './buscador/buscador.component';

@NgModule({
  declarations: [
    MenuComponent,
    InputFechaComponent,
    PaginadorComponent,
    BuscadorComponent
  ],
  exports: [
    MenuComponent,
    InputFechaComponent,
    ReactiveFormsModule,
    PaginadorComponent,
    BuscadorComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
