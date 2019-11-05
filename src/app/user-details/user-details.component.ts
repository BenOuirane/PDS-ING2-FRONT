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

  /*
  * Here we say that, when this component will be called
  * we will put a user on input, see line 5 on user-list.component.html
  * We will show the details of an user only if we have a User
  */
  @Input() user: User;

  constructor(private userService: UserService, private listComponent: UsersListComponent) { }

  /*
  * Here we don't 'talk' with the back as this component is only made
  * to display a user, so there are no functions here
  */
  ngOnInit() {
  }

}
