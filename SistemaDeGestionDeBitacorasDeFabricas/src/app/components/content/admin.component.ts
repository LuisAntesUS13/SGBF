import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ProlongaSesionService } from 'src/app/services/prolonga-sesion/prolonga-sesion.service';
// import { ProlongaSesionService } from 'src/app/services/prolonga-sesion/prolonga-sesion.service';

@Component({
  selector: 'us-admin',
  template: `
     <app-menu></app-menu>
    <div class="contenido_principal">
      <!-- <sg-breadcrumbs style="padding:0px;"></sg-breadcrumbs> -->
      <router-outlet></router-outlet>
    </div>
    <app-spinner></app-spinner>
  `,
})
export class AdminComponent {
  constructor(private prolongaSesionService: ProlongaSesionService) {
  }
}
