import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CandidateService {

  private baseUrl:string= "http://localhost:8080/candidates/create";
  private httpheader={headers: new HttpHeaders({'Content-type' : 'application/json'})}

  constructor(private _http: HttpClient) { }


  postCandidate(candidate){
    return this._http.post(this.baseUrl,candidate,this.httpheader);
  }





}
