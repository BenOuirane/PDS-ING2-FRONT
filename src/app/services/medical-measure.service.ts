import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {MedicalMeasurementType} from "../health-model/medical-measurement-type";
import {catchError, tap} from "rxjs/operators";
import {MedicalMeasurement} from "../health-model/medical-measurement";
import {Resident} from "../resident";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
const apiRoot = "http://localhost:8080";
const apiResident = apiRoot + "/api/resident";
const apiResidents= apiRoot + "/api/residents"
const apiAllMeasurementTypes = apiRoot + "/api/measurementType";
const apiMeasurementsByResidentAndType = apiRoot + "/api/measurement/resident";

@Injectable({
  providedIn: 'root'
})
export class MedicalMeasureService {

  constructor(private httpClient: HttpClient,) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getMedicalMeasures():Observable<any>{
    return this.httpClient.get("http://localhost:8080/api/mockdata/measures/Pierre");
  }


  getMeasurementTypes(): Observable<MedicalMeasurementType[]> {
    return this.httpClient.get<MedicalMeasurementType[]>(apiAllMeasurementTypes)
      .pipe(
        tap(resident => console.log('fetched MeasurementType')),
        catchError(this.handleError('getMeasurementTypes', []))
      );
  }


  getMeasurementsByResidentAndType(idResident: any, idMeasurementType:any): Observable<MedicalMeasurement[]> {
    const url = `${apiResident}/${idResident}/type/${idMeasurementType}`;
    return this.httpClient.get<MedicalMeasurement[]>(url)
      .pipe(
        tap(resident => console.log('fetched Measurement for Resident')),
        catchError(this.handleError('getMeasurementsByResidentAndType', []))
      );
  }


  getResidents(): Observable<Resident[]> {
    return this.httpClient.get<Resident[]>(apiResidents)
      .pipe(
        tap(resident => console.log('fetched residents')),
        catchError(this.handleError('getResidents', []))
      );
  }

  getResident(id: number): Observable<Resident> {
    const url = `${apiResident}/${id}`;
    return this.httpClient.get<Resident>(url).pipe(
      tap(_ => console.log(`fetched resident id=${id}`)),
      catchError(this.handleError<Resident>(`getResident id=${id}`))
    );
  }
}
