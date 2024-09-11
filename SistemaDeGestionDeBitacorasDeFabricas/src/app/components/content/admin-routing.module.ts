import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AsistenciaComponent } from './lista-asistencia/lista-asistencia.component';
import { PermisosComponent } from './permisos/permisos.component';
import { LidertecnicoBitacorasComponent } from './lidertecnico-bitacoras/lidertecnico-bitacoras.component';
import { ContratosComponent } from './contratos/contratos.component';
import { RequerimientosComponent } from './requerimientos/requerimientos.component';
import { ConsultorBitacorasComponent } from './consultor-bitacoras/consultor-bitacoras.component';
import { ConsultorActividadesBitacoraComponent } from './consultor-actividades-bitacora/consultor-actividades-bitacora.component';
import { LoginComponent } from './login/login.component';
import { EquipoTrabajoComponent } from './equipo-trabajo/equipo-trabajo.component';
import { LidertecnicoActividadesBitacorasComponent } from './lidertecnico-actividades-bitacoras/lidertecnico-actividades-bitacoras.component';
import { ListaAsistenciaLiderTecnicoComponent } from './lista-asistencia-lider-tecnico/lista-asistencia-lider-tecnico.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'inicio',
        data: {
          title: 'Inicio',
          breadcrumbs: [],
        },
        component: InicioComponent,
      },
      {
        path: 'usuarios',
        data: {
          title: 'Administración usuarios',
          breadcrumbs: [],
        },
        component: UsuariosComponent,
      }, {
        path: 'lidertecnico/bitacora/actividades/:periodo/:nombreProyecto',
        data: {
          title: 'Aturización de bitácoras',
          breadcrumbs: [],
        },
        component: LidertecnicoActividadesBitacorasComponent,
      }, {
        path: 'lidertecnico/bitacora',
        data: {
          title: 'Bitacoras',
          breadcrumbs: [],
        },
        component: LidertecnicoBitacorasComponent,
      },{
        path: 'consultor/bitacora',
        data: {
          title: 'Bitacoras',
          breadcrumbs: [],
        },
        component: ConsultorBitacorasComponent,
      },{
        path: 'consultor/bitacora/actividades/:periodo',
        data: {
          title: 'Actividades',
          breadcrumbs: [],
        },
        component: ConsultorActividadesBitacoraComponent,
      },
      {
        path: 'contratos',
        data: {
          title: 'Administración contratos',
          breadcrumbs: [],
        },
        component: ContratosComponent,
      },
      {
        path: 'requerimientos/:contrato',
        data: {
          title: 'Administración requeriminetos',
          breadcrumbs: [],
        },
        component: RequerimientosComponent,
      },
      {
        path: 'requerimientos',
        data: {
          title: 'Administración requeriminetos',
          breadcrumbs: [],
        },
        component: RequerimientosComponent,
      },
      {
        path: 'asistencia',
        data: {
          title: 'Lista de Asistencia',
          breadcrumbs: [],
        },
        component: AsistenciaComponent,
      },
      {
        path: 'permisos',
        data: {
          title: 'Permisos',
          breadcrumbs: [],
        },
        component: PermisosComponent,
      },
      {
        path: 'login',
        data: {
          title: 'Login',
          breadcrumbs: [],
        },
        component: LoginComponent,
      },
      {
        path: 'asignacionPerfiles',
        data: {
          title: 'Administración requeriminetos',
          breadcrumbs: [],
        },
        component: EquipoTrabajoComponent,
      },
      {
        path: 'listaAsistenciaLiderTecnico',
        data: {
          title: 'Lista de Asistencia Lider Tecnico',
          breadcrumbs: [],
        },
        component: ListaAsistenciaLiderTecnicoComponent,
      },

      // {
      //   path: 'notificaciones',
      //   data: {
      //     title: 'Administración de notificaciones',
      //     breadcrumbs: [
      //       {
      //         text: 'Notificacioes',
      //         active: true,
      //       },
      //     ],
      //   },
      //   component: NotificacionesComponent,
      // },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
