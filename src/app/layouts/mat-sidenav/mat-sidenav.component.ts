import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NavigationKey } from '../../helpers/enums/navigation-key.enum';
import { NavigationService } from '../../services/internal-services/navigation.service';
import { filter } from 'rxjs/operators';
//import { NavigationKey } from 'selenium-webdriver';
@Component({
  selector: 'app-mat-sidenav',
  templateUrl: './mat-sidenav.component.html',
  styleUrls: ['./mat-sidenav.component.scss']
})
export class MatSidNavComponent implements AfterViewInit {
  title = 'ALED';
  @ViewChild('navigationSideBar', {static: false}) navigationSideBar : ElementRef;
  navigationKey : NavigationKey;

  constructor(private navigationService: NavigationService, public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute ) { 
  this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(()=> {
  this.navigationKey = ActivatedRoute.prototype.firstChild.snapshot.data['navContextId'];
  })
}

  ngAfterViewInit() {
    this.navigationService.navigationSideBar= this.navigationSideBar;
  }

  openHomeView() {
    this.navigationService.closeNav();
    this.router.navigate(['/home'])
  }
  
  openReportingView() {
    this.navigationService.closeNav();
    this.router.navigate(['/reporting-service'])
  }
}
/*THIS COMPONENT WON'T BE USED UNTIL THE NEXT SPRINT
SOME UPDATES TO DO BEFORE THAT WILL BE FUNCTIONAL*/
