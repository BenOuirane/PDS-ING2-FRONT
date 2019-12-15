import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../user.service';
import { User } from '../user';
import {log} from "util";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService) { }

  /*
  * When we arrive on this component page
  * reloadData will be called
  */
  ngOnInit() {
    this.reloadData();
  }

  /*
  * getUsersList() from user.service.ts will be called
  */
  reloadData() {
    this.users = this.userService.getUsersList();
  }
}
