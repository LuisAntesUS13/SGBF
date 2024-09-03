import { AdminRoutingModule } from './admin-routing.module';
import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdminComponent } from './admin.component';
import { ContratosComponent } from './contratos/contratos.component';
import { RequerimientosComponent } from './requerimientos/requerimientos.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [CurrencyPipe, DatePipe, DecimalPipe],
  declarations: [AdminComponent, InicioComponent, UsuariosComponent, ContratosComponent, RequerimientosComponent],
  exports: [],
})
export class AdminModule {}
