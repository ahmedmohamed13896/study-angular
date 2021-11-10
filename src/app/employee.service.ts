import { Observable } from 'rxjs';
import { employee } from './emplyee.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url :string = './assets/data/employee.json';

  constructor(private http: HttpClient ) { }

  getEmployees():Observable<employee[]> {
    return this.http.get<employee[]>(this._url);
  }
}
