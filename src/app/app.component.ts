import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/*
Here, we give some attributes to the html page
(app.component.html),
we can call them with {xxx} on the html code
 */
export class AppComponent {
  title = 'Application Angular FrontEnd';
  description = 'Ceci est un test d\'application FrontEnd en Angular comminiquant avec un BackEnd en Spring.';

  user: User = new User();


  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
  

  authenticated() {
    this.user = JSON.parse(localStorage.getItem('user'));
    return localStorage.getItem('user');
  }
}
