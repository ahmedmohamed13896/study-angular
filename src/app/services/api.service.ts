import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:3000/posts/'

  constructor(private http:HttpClient) { }

  postEmployee(data:any){
    return this.http.post<any>(this.url,data).pipe(
      map((res)=> {
        return res
      })
    )
  }
  getEmployee(){
    return this.http.get<any>(this.url).pipe(
      map((res)=> {
        return res
      })
    )
  }

  updateEmployee(data:any , id:number){
    return this.http.put<any>(this.url + id , data).pipe(
      map((res)=> {
        return res
      })
    )
  }

  deleteEmployee(id:number,){
    return this.http.delete<any>(this.url+id)
  }

}
