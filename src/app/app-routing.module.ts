import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./security/login/login.component";
import {MenuTopComponent} from "./accueil/menu-top/menu-top.component";

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'accueil',
    component : MenuTopComponent
  },
  {
    path: '**',
    redirectTo: 'accueil',
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
