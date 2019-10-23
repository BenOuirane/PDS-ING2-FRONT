import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUserComponent } from './create-user/create-user.component';

/*
The routing module :
An array contains all the routes where the client could go
When the client will go on 'http://localhost:4200/user',
the users-list.component will be called (see the imports higher)
and will take care of the rest of the client request

If he goes on 'http://localhost:4200/', we redirect him to '/user'
 */
const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UsersListComponent },
  { path: 'add', component: CreateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
