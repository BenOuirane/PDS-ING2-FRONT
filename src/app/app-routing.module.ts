import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import {LoginComponent} from "./login/login.component";
import { AuthGuard } from "./helpers/AuthGuard";
import {User} from "./user";
import { RoleGuard } from './helpers/RoleGuard';

/*
The routing module :
An array contains all the routes where the client could go
When the client will go on baseUrl,
the users-list.component will be called (see the imports higher)
and will take care of the rest of the client request

If he goes on 'http://{localhost} or {172.31.254.61}:4200/',
we redirect him to the route '/user that calls the UsersListComponent'
 */


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home/:id', component: UsersListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: CreateUserComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN'} },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ]
  ,
  exports: [RouterModule]
})

export class AppRoutingModule {
  
 }
