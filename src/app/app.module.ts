import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { LoginComponent } from './login/login.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { GetNotificationsComponent } from './get-notifications/get-notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    LoginComponent,
    SendNotificationComponent,
    GetNotificationsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
