import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';


@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    private baseUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient) { }

    createCompany(company: Company): Observable<Object> {
        console.log(this.baseUrl + `/company / create`);
        return this.http.post(`${this.baseUrl}` + `/company/create`, company);
        
    }

    getCompanyList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }
  
}
