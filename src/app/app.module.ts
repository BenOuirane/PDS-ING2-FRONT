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
import { IndicatorsComponent } from './indicators/indicators.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { GetNotificationsComponent } from './get-notifications/get-notifications.component';
import {IndicatorsService} from "./indicators.service";

import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { CandidateService } from './candidate_services/candidate.service';
import { from } from 'rxjs';

import { SearchBarComponent } from './layouts/search-bar/search-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { UpdateDatamockComponent } from './layouts/update-datamock/update-datamock.component';
import { ObjectComponent } from './object/object.component';
import {
  MatTabsModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatButtonModule, MatFormFieldModule, MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapPrototypeComponent } from './layouts/map-prototype/map-prototype.component';
import { FavoriteFiltersComponent } from './layouts/favorite-filters/favorite-filters.component';

import { ObjectMapComponent } from './object-map/object-map.component';
import { HistoryComponent } from './history/history.component';
import { PopupConfirmationComponent } from './layouts/popup-confirmation/popup-confirmation.component';



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
    IndicatorsComponent,
    MapPrototypeComponent,
    FavoriteFiltersComponent,

    ObjectMapComponent,
    HistoryComponent,
    PopupConfirmationComponent

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
    MatIconModule
  ],
  providers: [
    CandidateService,
    CommonModule,
    IndicatorsService,
    {
      provide: LOCALE_ID, useValue: "fr-FR"
    }
  ],
  bootstrap: [AppComponent]

})
export class AppModule {
}
