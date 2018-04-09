import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MenuTopRoutingModule} from "./menu-top-routing.module";
import {MenuTopComponent} from "./menu-top.component";


@NgModule({
  imports: [
    CommonModule,
    MenuTopRoutingModule
  ],
  providers: []
  ,
  declarations: [
    MenuTopComponent
  ],
  exports :[]
})
export class MenuTopModule {

  constructor() { }



}
