import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "../user";
import { UserService } from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  logedUser: User = new User();
  error: string;
  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router) { 
    this.loginForm = this.createFormGroup();
  }

  ngOnInit() {
    if (localStorage.getItem('user')) { 
      this.logedUser = JSON.parse(localStorage.getItem('user'));
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    this.userService.loginUser(this.user).subscribe(
      data => {
        localStorage.setItem('user', JSON.stringify(data));
        this.logedUser = JSON.parse(localStorage.getItem('user'));
        this.error = null;
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error); 
        this.error= "Impossible de se connecter, vérifiez vos identifiants";
      }
    );
  }

  createFormGroup() {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  } 

}
