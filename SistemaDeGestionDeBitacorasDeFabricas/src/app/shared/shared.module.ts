import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputFechaComponent } from './input-fecha/input-fecha.component';
import { PaginadorComponent } from './paginador/paginador.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ConfirmarModalComponent } from './confirmar-modal/confirmar-modal.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SeparadorConTextoComponent } from './separador-con-texto/separador-con-texto.component';

@NgModule({
  declarations: [
    MenuComponent,
    InputFechaComponent,
    PaginadorComponent,
    BuscadorComponent,
    ConfirmarModalComponent,
    SpinnerComponent,
    SeparadorConTextoComponent,
  ],
  exports: [
    MenuComponent,
    InputFechaComponent,
    ReactiveFormsModule,
    PaginadorComponent,
    BuscadorComponent,
    ConfirmarModalComponent,
    SpinnerComponent,
    SeparadorConTextoComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
