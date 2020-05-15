import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../class_candidate/candidate';


@Injectable()
export class CandidateService {

  //private baseUrl:string= "http://localhost:8080/candidates/create";
   private baseUrl:string= "http://172.31.254.61:8080/candidates/create";
  
//  Url= "http://localhost:8080/score";
 Url = "http://172.31.254.61:8080/score";
 // Urlp= "http://localhost:8080/sort";
  Urlp = "http://172.31.254.61:8080/sort";

  private httpheader={headers: new HttpHeaders({'Content-type' : 'application/json'})}

  

  constructor(private _http: HttpClient) { }

//test hajer
   getPriority(){
    return this._http.get<Candidate[]>(this.Urlp);

   }
  

 
  getCandidate(){
    return this._http.get<Candidate[]>(this.Url);
  }



  postCandidate(candidate){
    return this._http.post(this.baseUrl,candidate,this.httpheader);
  }





}
