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
import { LidertecnicoBitacorasComponent } from './lidertecnico-bitacoras/lidertecnico-bitacoras.component';
import { ContratosComponent } from './contratos/contratos.component';
import { RequerimientosComponent } from './requerimientos/requerimientos.component';
import { ConsultorBitacorasComponent } from './consultor-bitacoras/consultor-bitacoras.component';
import { AsistenciaComponent } from './lista-asistencia/lista-asistencia.component';
import { PermisosComponent } from './permisos/permisos.component';
import { ConsultorActividadesBitacoraComponent } from './consultor-actividades-bitacora/consultor-actividades-bitacora.component';
import { LoginComponent } from './login/login.component';
import { EquipoTrabajoComponent } from './equipo-trabajo/equipo-trabajo.component';
import { LidertecnicoActividadesBitacorasComponent } from './lidertecnico-actividades-bitacoras/lidertecnico-actividades-bitacoras.component';
import { PerfilesConsultoresComponent } from './perfiles-consultores/perfiles-consultores.component';
import { ListaAsistenciaLiderTecnicoComponent } from './lista-asistencia-lider-tecnico/lista-asistencia-lider-tecnico.component';
import { ReasignarLiderEquipoComponent } from './reasignar-lider-equipo/reasignar-lider-equipo.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [CurrencyPipe, DatePipe, DecimalPipe],
  declarations: [AdminComponent,
                  InicioComponent,
                  UsuariosComponent,
                  ContratosComponent,
                  RequerimientosComponent,
                  LidertecnicoBitacorasComponent,
                  ConsultorBitacorasComponent,
                  ConsultorActividadesBitacoraComponent,
                  EquipoTrabajoComponent,
                  ConsultorActividadesBitacoraComponent,
                  LidertecnicoActividadesBitacorasComponent,
                  AsistenciaComponent,
                  PermisosComponent,
                  LoginComponent,
                  PerfilesConsultoresComponent,
                  ListaAsistenciaLiderTecnicoComponent,
                  ReasignarLiderEquipoComponent
                ],
  exports: [],
})
export class AdminModule {}
