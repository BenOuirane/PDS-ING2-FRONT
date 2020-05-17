import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  //@Input() navigationKey?: NavigationKey;

  constructor(private router: Router,  public dialog: MatDialog) {
    
  }

  ngOnInit() {
  }

  logout() {
   
    this.router.navigate(['/login']);
  }

  showEnvironmentInformations() {
    console.log('should show environment informations')
  }

  //Should hide navigation menu on logged off user, or on some specific screen
  shouldShowNavigationMenu() {
    /*if (!this.authenticationService.isUserLoggedIn()) {
      return false;
    } else {
      if (this.navigationKey === NavigationKey.CRCDD) {
        return false;
      }
      return true;
    }*/
  }

  shouldShowEnvironmentBlock() {}
    /*if (this.navigationKey === NavigationKey.CRCDD) {
      return false;
    }
    return true;*/
  }


  //this class is not completed..... it will be completed if I got some free time