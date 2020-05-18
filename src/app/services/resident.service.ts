import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from "../user";
import { Resident } from '../resident';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {
  createPositionData() {
    throw new Error("Method not implemented.");
  }
  
    createResidentData(): Observable<any>{
      let header = new HttpHeaders({'Content-Type': 'application/json'})
      let httpOption = {
          headers: header
        };
      console.log('service create residents');
      return this.http.post(this.baseUrl+ '/generate_resident', null, httpOption);
      }


      updateResidentData(): Observable<any>{
        let header = new HttpHeaders({'Content-Type': 'application/json'})
        let httpOption = {
            headers: header
          };
        console.log('service update resident');
        return this.http.post(this.baseUrl+ '/update_resident', null, httpOption);
        }
  //private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://172.31.254.61:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getResident(user: User): Observable<Resident> {
    return this.http.put<Resident>(`${this.baseUrl}` + `/resident/singleton`, user);
  }

  getResidentById(id_resident: string): Observable<any> {
    let httpParams = new HttpParams();
    httpParams.set('id', id_resident);
      let httpOption = {
        params: httpParams,
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
      return this.http.get<any>(this.baseUrl + `/resident/singleton/`+id_resident, httpOption);

}

}
