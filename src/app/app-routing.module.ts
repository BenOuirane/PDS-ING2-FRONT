import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { GetNotificationsComponent } from './get-notifications/get-notifications.component';
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./helpers/AuthGuard";
import { RoleGuard } from './helpers/RoleGuard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'notification', component: SendNotificationComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN'}},
  { path: 'notifications', component: GetNotificationsComponent, canActivate: [RoleGuard], data: { expectedRole: 'RESIDENT'}},
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
