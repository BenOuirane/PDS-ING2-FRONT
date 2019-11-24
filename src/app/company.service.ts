import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Company } from './company';


@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    private baseUrl = 'http://localhost:8080/api/company';

    constructor(private http: HttpClient) { }

    createCompany(company: Company): Observable<Object> {

        return this.http.post(`${this.baseUrl}` + `/create`, company); 

    }

    getUserList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }
  
}
