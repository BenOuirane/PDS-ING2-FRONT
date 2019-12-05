import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  logedUser: User = new User();
  error : string;
  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router) { 
    this.loginForm = this.createFormGroup();
  }

  ngOnInit() {
    if (this.user) { 
        this.router.navigate(['home']);
    }
  }

  login() {
    this.userService.loginUser(this.user)
      .subscribe(data => {
        localStorage.setItem('user', JSON.stringify(data));
        this.error = null;
        this.router.navigate(['home']);
      }
      , error => {
        this.error="Impossible de se connecter, vérifiez vos identifiants";
        console.log(error); 
      });

    this.user = new User();
  }

  createFormGroup() {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  } 

  /*
  * When we click on 'Submit', this is launched, see save() function
  */
  onSubmit() {
    this.login();
  }

}
