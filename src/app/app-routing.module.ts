import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { GetNotificationsComponent } from './get-notifications/get-notifications.component';
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./helpers/AuthGuard";
import { RoleGuard } from './helpers/RoleGuard';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UpdateDatamockComponent } from './update-datamock/update-datamock.component';
import { ObjectComponent } from './object/object.component'; 


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'notification', component: SendNotificationComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN'}},
  { path: 'notifications', component: GetNotificationsComponent, canActivate: [RoleGuard], data: { expectedRole: 'RESIDENT'}},
  { path: 'object', component: ObjectComponent, canActivate: [RoleGuard], data: {expectedRole: 'RESIDENT'}},
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchBarComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN'}},
  { path: 'updatedata', component: UpdateDatamockComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN'}}
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
