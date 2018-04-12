import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginRoutingModule} from "./login-routing.module";
import { LoginComponent } from './login.component';
import {InputTextModule} from "primeng/primeng";
import {AuthentificationService} from "../authentification.service";
import {TokenStorage} from "../TokenStorage";
import {ButtonModule} from "primeng/button";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    InputTextModule,
    ButtonModule
  ],
  declarations: [LoginComponent],

  providers :[AuthentificationService,TokenStorage]
})
export class LoginModule { }
