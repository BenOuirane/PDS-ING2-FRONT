import { BrowserModule } from '@angular/platform-browser';

import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';

import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

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
import { CandidateService } from './candidate_services/candidate.service';
import { from } from 'rxjs';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateDatamockComponent } from './update-datamock/update-datamock.component';
import { ObjectComponent } from './object/object.component';
import {
  MatTabsModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatButtonModule, MatFormFieldModule, MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObjectMapComponent } from './object-map/object-map.component';
import { HistoryComponent } from './history/history.component';

import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { PriorityCandidateComponent } from './priority-candidate/priority-candidate.component';
import { ScoreService } from './Score_service/score.service';
import { NoteProfilesComponent } from './note-profiles/note-profiles.component';


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
    ObjectMapComponent,
    HistoryComponent,
    ListCandidateComponent,
    PriorityCandidateComponent,
    NoteProfilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //HttpModule,
    MatTabsModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    NgxMaterialTimepickerModule, 
    MatButtonModule,
    MatFormFieldModule,
    AmazingTimePickerModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    CandidateService,
    ScoreService,
    CommonModule,
    {
      provide: LOCALE_ID, useValue: "fr-FR"
    }
  ],
  bootstrap: [AppComponent]

})
export class AppModule {
}
