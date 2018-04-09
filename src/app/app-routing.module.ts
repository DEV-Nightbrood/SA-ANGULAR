import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicGuard, ProtectedGuard } from 'ngx-auth';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [ PublicGuard ],
    loadChildren: 'app/security/login/login.module#LoginModule'
  },
  {
    path: 'utilisateurs',
    canActivate: [ ProtectedGuard ],
    loadChildren: 'app/utilisateurs/utilisateur-manager/utilisateur-manager.component#UtilisateurManagerComponent'
  },
  {
    path: 'accueil',
    canActivate: [ ProtectedGuard ],
    loadChildren: 'app/accueil/menu-top/menu-top.component#MenuTopComponent'
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
