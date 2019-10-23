import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/*
Here, we give some attributes to the html page,
we can call them with {xxx} on the html code
 */
export class AppComponent {
  title = 'Application Angular FrontEnd';
  description = 'Ceci est un test d\'application FrontEnd en Angular comminiquant avec un BackEnd en Spring.';
}
