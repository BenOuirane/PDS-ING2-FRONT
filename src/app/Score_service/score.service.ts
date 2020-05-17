import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import {map} from 'rxjs/operators';

import { Score } from '../class_score/score';
import { Observable } from 'rxjs/observable';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';
import  'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  
 // Url = "http://localhost:8080/api/note";
   Url = "http://172.31.254.61:8080/api/note";
   private httpheader={headers: new HttpHeaders({'Content-type' : 'application/json'})}

  constructor(private http:HttpClient) { }

//  createScore(score:Score){
//    return this.http.post<Score>(this.Url, score);
//  }

// createScore(score: object):Observable<any>{
//  return this.http.post<any>(this.Url, score).pipe(map((data:any) => {
   
    
 // }));
  
//}

createScore(score: Score){
  return this.http.post<Score>(this.Url,score);
}
 
postScore(score){
  return this.http.post(this.Url,score,this.httpheader);
}

}
