import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { GetNotificationsComponent } from './get-notifications/get-notifications.component';

import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import {CandidateService} from './candidate_services/candidate.service';
import { from } from 'rxjs';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateDatamockComponent } from './update-datamock/update-datamock.component';
import { ObjectComponent } from './object/object.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SendNotificationComponent,
    GetNotificationsComponent,

    CreateCandidateComponent,

    SearchBarComponent,
    HomeComponent,
    FooterComponent,
    UpdateDatamockComponent,
    ObjectComponent,

    
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

    CommonModule,

  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { 
}
