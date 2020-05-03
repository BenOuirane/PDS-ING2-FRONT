import {Injectable} from '@angular/core'
import {Event, NavigationEnd, Router, ActivatedRoute} from '@angular/router'
import {BehaviorSubject} from 'rxjs';
import {NavigationKey} from '../../helpers/enums/navigation-key.enum'
  

@Injectable({providedIn: 'root'})
export class NavigationService {
    public navigationSideBar: any;
    public currentUrl= new BehaviorSubject<string>(undefined);
    public activeNavigationKey : NavigationKey;

    constructor(private router: Router, private activatedRoute : ActivatedRoute) {
        this.router.events.subscribe((events: Event) => {
        if (event instanceof NavigationEnd) {
            this.currentUrl.next(event.urlAfterRedirects)
            this.activeNavigationKey= activatedRoute.root.firstChild.snapshot.data['navContextId'];
        }
    });
    }
public closeNav() {
    this.navigationSideBar.close();
}
public openNav() {
    this.navigationSideBar.open();
}
}
    
