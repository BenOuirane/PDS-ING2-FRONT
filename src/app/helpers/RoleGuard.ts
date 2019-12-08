import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {User} from "../user";

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {

    user : User = new User();

    constructor(public router: Router) {}  
    
    canActivate(route: ActivatedRouteSnapshot): boolean {
        const expectedRole = route.data.expectedRole;
        this.user = JSON.parse(localStorage.getItem('user'));

        if (!this.user || this.user.role != expectedRole) {
          this.router.navigate(['home', this.user.id]);
          return false;
          
        }
        return true;
      }

}