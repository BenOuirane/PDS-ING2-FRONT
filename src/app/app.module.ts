import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { GetNotificationsComponent } from './get-notifications/get-notifications.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import {CandidateService} from './candidate_services/candidate.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UsersListComponent,
    UserDetailsComponent,
    LoginComponent,
    SendNotificationComponent,
    GetNotificationsComponent,
    CreateCandidateComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
   
  ],
  providers: [
    CandidateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
