import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [LoginRoutingModule, CommonModule],
  declarations: [LoginPageComponent],
  exports: [RouterModule] 
})
export class LoginPageModule {}
