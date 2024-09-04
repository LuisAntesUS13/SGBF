import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LidertecnicoBitacorasComponent } from './lidertecnico-bitacoras/lidertecnico-bitacoras.component';
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
