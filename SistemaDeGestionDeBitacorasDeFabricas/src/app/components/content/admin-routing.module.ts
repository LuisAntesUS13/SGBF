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
        path: 'lidertecnico',
        data: {
          title: 'Autorización de bitácoras',
          breadcrumbs: [],
        },
        component: LidertecnicoBitacorasComponent,
      },{
        path: 'consultor',
        data: {
          title: 'Bitacoras',
          breadcrumbs: [],
        },
        component: LidertecnicoBitacorasComponent,
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
