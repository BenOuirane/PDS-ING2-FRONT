import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(public router: Router) {}  
    
    canActivate(): boolean {
        if (!localStorage.getItem('user')) {
          this.router.navigate(['login']);
          return false;
        }
        return true;
      }

}