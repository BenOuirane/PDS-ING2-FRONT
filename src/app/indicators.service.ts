import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Failure} from './Failure';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable()
export class IndicatorsService {

  //private Url = 'http://localhost:8080';
  private Url = 'http://172.31.254.61:8080';

  constructor(private http: HttpClient) {
  }

  getResidence() {
    return this.http.get(this.Url + '/residence');
  }

  getRooms() {
    return this.http.get<any>(this.Url + '/api/roomsize');
  }
  getObjects() {
    return this.http.get<any>(this.Url + '/api/objectsize');
  }
  getAnnualFailure(year: number): Observable<Failure> {

    return this.http.get<any>(this.Url + '/api/failure/year?year='+year);

  }
  getMonthlyFailure1(): Observable<any> {

    return this.http.get<any>(this.Url + '/api/failure/month?year=2019&month=12');

  }
  getMonthlyFailure2(): Observable<any> {
    return this.http.get<any>(this.Url + '/api/failure/month?year=2020&month=01');

  }
  getMonthlyFailure3(): Observable<any> {
    return this.http.get<any>(this.Url + '/api/failure/month?year=2020&month=02');

  }
  getTotalSubscription(year: number): Observable<any> {
    return this.http.get<any>(this.Url + '/subscription/name?year='+year);

  }
  getMonthSubscription(year: number): Observable<any> {
    return this.http.get<any>(this.Url + '/subscription/month?year='+year);

  }
  getAnnualSubscription() {
    return this.http.get<any>(this.Url + '/subscription/year');

  }
}
