import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputFechaComponent } from './input-fecha/input-fecha.component';

@NgModule({
  declarations: [
    MenuComponent,
    InputFechaComponent,
  ],
  exports: [
    MenuComponent,
    InputFechaComponent,
    ReactiveFormsModule,
  ],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
