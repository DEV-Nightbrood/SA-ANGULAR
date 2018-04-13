import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";
import {TokenStorage} from "../TokenStorage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthentificationService, private token: TokenStorage) {
  }

  username: string;
  password: string;

  login(): void {
    this.authService.attemptAuth(this.username, this.password)
      .subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['accueil']);
      },
        error => console.log(error),

    );
  }


  onKeyUsername(event:KeyboardEvent)
  {
    this.username = (<HTMLInputElement>event.target).value;
  }
  onKeyPassword(event:KeyboardEvent)
  {
    this.password = (<HTMLInputElement>event.target).value;
  }

}
