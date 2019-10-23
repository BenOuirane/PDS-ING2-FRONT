import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService, private listComponent: UsersListComponent) { }

  ngOnInit() {
  }

}
