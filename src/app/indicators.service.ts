import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Failure} from "./Failure";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable()
export class IndicatorsService {
  constructor(private http: HttpClient) {
  }

  getResidence() {
    return this.http.get("http://localhost:8080/residence");
  }


  getAnnualFailure(year: number): Observable<Failure> {

    return this.http.get<any>('http://localhost:8080/api/failure/year?year='+year);

  }
  getMonthlyFailure1(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/failure/month?year=2019&month=12');

  }
  getMonthlyFailure2(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/failure/month?year=2020&month=01');

  }
  getMonthlyFailure3(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/failure/month?year=2020&month=02');

  }
}
