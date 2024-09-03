import { Component } from '@angular/core';

@Component({
  selector: 'us-auth',
  template: `
    <!-- <sg-menu></sg-menu> -->
    <div class="row tamaño-contenedor contenedor-principal">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AuthComponent {
  constructor() {}
}
