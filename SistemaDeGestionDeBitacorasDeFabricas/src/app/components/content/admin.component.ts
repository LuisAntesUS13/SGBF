import { Component, OnChanges, SimpleChanges } from '@angular/core';
// import { ProlongaSesionService } from 'src/app/services/prolonga-sesion/prolonga-sesion.service';

@Component({
  selector: 'us-admin',
  template: `
     <app-menu></app-menu>
    <div class="">
      <!-- <sg-breadcrumbs style="padding:0px;"></sg-breadcrumbs> -->
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AdminComponent implements OnChanges {
  // constructor(private prolongaSesionService: ProlongaSesionService) {
  constructor() {
    // this.prolongaSesionService.iniciarIntervalo();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {}
}
