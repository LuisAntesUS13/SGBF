import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { proteccionRutasGuard } from './services/guards/proteccion-rutas.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'content',
    canActivate: [proteccionRutasGuard],
    loadChildren: () =>
      import('./components/content/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', redirectTo: '/auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
