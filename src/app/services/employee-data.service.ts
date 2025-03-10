import { Injectable } from '@angular/core';
import { MOCK_DATA } from './mock';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  private env;

  constructor(private http: HttpClient) {
    this.env = environment;
  }

  getAllEmployees(): Observable<any> {
    return this.http.get(this.env.apiUrl+'/employees');
  }

  getEmployeeById(id: string): Observable<any> {
    return this.http.get(this.env.apiUrl+'/employee/'+id);
  }


}
