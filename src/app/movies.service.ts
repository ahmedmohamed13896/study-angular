import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) {

   }
   getTrendingmovies():Observable<any>{
     return this.http.get('http://api.themoviedb.org/3/trending/movies/week?api_key=f1aca93e54807386df3f6972a5c33b50');
   }

}
