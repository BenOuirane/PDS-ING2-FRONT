import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { GetNotificationsComponent } from './get-notifications/get-notifications.component';
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./helpers/AuthGuard";
import { RoleGuard } from './helpers/RoleGuard';

import { CreateCandidateComponent } from './create-candidate/create-candidate.component';


/*
The routing module :
An array contains all the routes where the client could go
When the client will go on baseUrl,
the users-list.component will be called (see the imports higher)
and will take care of the rest of the client request

If he goes on 'http://{localhost} or {172.31.254.61}:4200/',
we redirect him to the route '/user that calls the UsersListComponent'
 */

import { SearchBarComponent } from './layouts/search-bar/search-bar.component';
import { UpdateDatamockComponent } from './layouts/update-datamock/update-datamock.component';
import { ObjectComponent } from './object/object.component';

import { MapPrototypeComponent } from './layouts/map-prototype/map-prototype.component';
import { ObjectMapComponent } from './object-map/object-map.component';
import { HistoryComponent } from './history/history.component';
import {IndicatorsComponent} from './indicators/indicators.component';




const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'notification', component: SendNotificationComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN'}},
  { path: 'notifications', component: GetNotificationsComponent, canActivate: [RoleGuard], data: { expectedRole: 'RESIDENT'}},
  { path: 'object', component: ObjectComponent, canActivate: [RoleGuard], data: {expectedRole: 'RESIDENT'}},
  { path: 'login', component: LoginComponent },
  { path: 'indicators', component: IndicatorsComponent },

  { path: 'add', component: CreateCandidateComponent },


  { path: 'search', component: SearchBarComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN'}},

 // todto be deleted for next releases, once the mocks are done !!
  { path: 'updatedata', component: UpdateDatamockComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN'}},
  { path: 'track-patients-control-view', component: MapPrototypeComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN'}},

  { path: 'updatedata', component: UpdateDatamockComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN'}},
  { path: 'objects', component: ObjectMapComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN'}},
  { path: 'history/:userId/:id', component: HistoryComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN'}}

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
