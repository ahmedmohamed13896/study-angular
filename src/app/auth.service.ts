import { User } from './user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url ='http://localhost:3000/register';

  constructor(private _HttpClient :HttpClient) { }

  register(user:User){
    return this._HttpClient.post(this.url,user).pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(() => error);
  }
}
