import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from "./room";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8080/api';
  //private baseUrl = 'http://172.31.254.61:8080/api';
  
  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(`${this.baseUrl}` + `/rooms`);
  }

}
