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
//import { SearchBarComponent } from './layouts/search-bar/search-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { UpdateDatamockComponent } from './layouts/update-datamock/update-datamock.component';
import { ObjectComponent } from './object/object.component';
import {
  MatTabsModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapPrototypeComponent } from './layouts/map-prototype/map-prototype.component';
import { FavoriteFiltersComponent } from './layouts/favorite-filters/favorite-filters.component';

import { ObjectMapComponent } from './object-map/object-map.component';
import { HistoryComponent } from './history/history.component';
import { HealthStateComponent } from './health-state/health-state.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatHeaderRowDef, MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { HealthResidentComponent } from './health-resident/health-resident.component';
import { FailureService } from './services/failure.service';
import { FailureComponent } from './failure/failure.component';

// @ts-ignore
import { ProgressWebsocketService } from './services/progress-websocket.service';
// @ts-ignore
import { RxStompService  } from '@stomp/ng2-stompjs';
import { HealthAlertComponent } from './health-alert/health-alert.component';
import { PopupConfirmationComponent } from './layouts/popup-confirmation/popup-confirmation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuditPathsComponent } from './layouts/audit-paths/audit-paths.component';
import { CacheSumAreaComponent } from './layouts/cache-sum-area/cache-sum-area.component';
import { FailureSimulationComponent } from './failure-simulation/failure-simulation.component';

import { CurrentAreaDetailComponent } from './layouts/current-area-detail/current-area-detail.component';

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
   //SearchBarComponent,
    HomeComponent,
    FooterComponent,
    UpdateDatamockComponent,
    ObjectComponent,
    IndicatorsComponent,
    MapPrototypeComponent,
    FavoriteFiltersComponent,
    FailureComponent,
    ObjectMapComponent,
    HistoryComponent,
    ListCandidateComponent,
    PriorityCandidateComponent,
    NoteProfilesComponent,
    HealthStateComponent,
    HealthResidentComponent,
    HealthAlertComponent,



    //PopupConfirmationComponent,
    AuditPathsComponent,
    CacheSumAreaComponent,
    CurrentAreaDetailComponent,
   // NgxPaginationModule

    FailureSimulationComponent,
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
    FormsModule,
    MatProgressSpinnerModule,
    MatTableModule,

    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    NgbModule,
    MatDialogModule
  ],
  providers: [
    RxStompService,
    ProgressWebsocketService,
    CandidateService,
    ScoreService,
    CommonModule,
    IndicatorsService,
    FailureService,

    {
      provide: LOCALE_ID, useValue: "fr-FR"
    },

  ],
  bootstrap: [AppComponent]

})
export class AppModule {
}
