import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MenuTopComponent} from "./menu-top.component";



const routes: Routes = [
  {
    path: '',
    component: MenuTopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuTopRoutingModule {

  constructor() { }



}
