import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  /*
  * This attribute is made to know when to show some elements on html
  */
  submitted = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  /*
  * Made to 'reboot' some attributes
  */
  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  /*
  * save() will call "CreateUser" that is on "user.service.ts"
  * And will log some infos with .subscribe
  */
  save() {
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  /*
  * When we click on 'Submit', this is launched, see save() function
  */
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
