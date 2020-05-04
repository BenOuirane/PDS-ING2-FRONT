import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bracelet } from '../layouts/models/bracelet';


@Injectable({
  providedIn: 'root'
})
export class BraceletService {
  
    createResidentData(): Observable<any>{
      let header = new HttpHeaders({'Content-Type': 'application/json'})
      let httpOption = {
          headers: header
        };
      console.log('service create bracelets');
      return this.http.post(this.baseUrl+ '/generate_bracelet', null, httpOption);
      }

     
          
    
      //Temp method
      updateBraceletData(): Observable<any>{
        let header = new HttpHeaders({'Content-Type': 'application/json'})
        let httpOption = {
            headers: header
          };
        console.log('service update bracelet');
        return this.http.post(this.baseUrl+ '/update_bracelet', null, httpOption);
        }
  //private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://172.31.254.61:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getBracelet(bracelet: Bracelet): Observable<Bracelet> {
    return this.http.put<Bracelet>(`${this.baseUrl}` + `/bracelet/singleton`, bracelet);
  }

  getBraceletById(id_bracelet: string): Observable<any> {
    let httpParams = new HttpParams();
    httpParams.set('id', id_bracelet);
      let httpOption = {
        params: httpParams,
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
      return this.http.get<any>(this.baseUrl + `/bracelets/`+id_bracelet, httpOption);

}

/*
getBraceletByIds(id_bracelet: string): Observable<any> {
  console.log("hihihih " +id_bracelet)
  console.log(this.baseUrl + `/bracelets/`+id_bracelet);
  let httpParams = new HttpParams();
  httpParams.set('id', id_bracelet);
    let httpOption = {
      params: httpParams,
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    
    return this.http.get<any>(this.baseUrl + `/bracelets/`+id_bracelet, httpOption);

}
*/

}
