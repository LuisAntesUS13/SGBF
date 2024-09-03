import { Component } from '@angular/core';

@Component({
  selector: 'us-auth',
  template: `
    <app-menu></app-menu>
    <div class="">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AuthComponent {
  constructor() {}
}
