import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
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
  { path: '', redirectTo: 'addCompany', pathMatch: 'full' },
  { path: 'user', component: UsersListComponent },
  { path: 'add', component: CreateUserComponent },
  { path: 'company', component: CompanyListComponent },
  { path: 'addCompany', component: CreateCompanyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
