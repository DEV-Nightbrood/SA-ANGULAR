import { NgModule } from '@angular/core';
import {
  AuthModule,
  AUTH_SERVICE,
  PUBLIC_FALLBACK_PAGE_URI,
  PROTECTED_FALLBACK_PAGE_URI
 } from 'ngx-auth';

import { TokenStorage } from './token-storage.service';
import {AuthentificationService} from "./authentification.service";

export function factory(authenticationService: AuthentificationService) {
  return authenticationService;
}

@NgModule({
    imports: [ AuthModule ],
    providers: [
      TokenStorage,
      AuthentificationService,
      { provide: PROTECTED_FALLBACK_PAGE_URI, useValue: '/' },
      { provide: PUBLIC_FALLBACK_PAGE_URI, useValue: '/login' },
      {
        provide: AUTH_SERVICE,
        deps: [ AuthentificationService ],
        useFactory: factory
      }
    ]
})
export class AuthentificationModule {

}
