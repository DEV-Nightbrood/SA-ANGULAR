import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import {Routes,RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import { UtilisateurManagerComponent } from './utilisateurs/utilisateur-manager/utilisateur-manager.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import {UtilisateurManagerModule} from "./utilisateurs/utilisateur-manager/utilisateur-manager.module";
import {MenuTopModule} from "./accueil/menu-top/menu-top.module";
import {Interceptor} from "./app.interceptor";
import {LoginModule} from "./security/login/login.module";

const routes : Routes = [
  {
    path : 'utilisateurs',component : UtilisateurManagerComponent
  }
];


@NgModule({
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule,
    MenuTopModule,
    BrowserAnimationsModule,
    UtilisateurManagerModule,
    AppRoutingModule,
    LoginModule
    ]
,
    declarations: [
    AppComponent,


  ],
  exports : [],
  providers: [
    {
      provide : HTTP_INTERCEPTORS, useClass : Interceptor, multi :true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
