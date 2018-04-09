import { NgModule } from '@angular/core';
import {UtilisateurManagerComponent} from "./utilisateur-manager.component";
import {RouterModule, Routes} from "@angular/router";




const routes: Routes = [
  {
    path: '',
    component: UtilisateurManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurManagerRoutingModule {

 constructor()
 {
   console.log("Router  UtilisateurManagerRoutingModule");
 }
}
