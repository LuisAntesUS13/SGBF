import { AuthRoutingModule } from './auth-routing.module';
/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  declarations: [AuthComponent, LoginComponent],
  exports: [],
})
export class AuthModule {}
