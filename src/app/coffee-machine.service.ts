import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Objects } from './objects';
import { Observable } from 'rxjs';
import { CoffeeMachine } from './coffeeMachine';

@Injectable({
  providedIn: 'root'
})
export class CoffeeMachineService {

  private baseUrl = 'http://localhost:8080/api';
  //private baseUrl = 'http://172.31.254.61:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getCoffeeMachine(objects: Objects) : Observable<Array<CoffeeMachine>>{
    return this.http.put<Array<CoffeeMachine>>(`${this.baseUrl}` + `/coffeeMachine/list`, objects);
  }

  updateCoffeeMachine(coffeeMachine: CoffeeMachine): Observable<boolean> {
    console.log("updateCoffeeMachine is call"); 
    return this.http.put<boolean>(`${this.baseUrl}` + `/coffeeMachine/updateParam`, coffeeMachine);
    
  }

  makeCoffee(coffeeMachine: CoffeeMachine): Observable<boolean> {
    console.log("MakeCoffee is call"); 
    return this.http.put<boolean>(`${this.baseUrl}` + `/coffeeMachine/makeCoffee`, coffeeMachine);
    
  }
  
}
