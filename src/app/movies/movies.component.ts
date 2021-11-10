import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  trendingMovies :any[] =[];
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTrendingmovies().subscribe( {
      next: (data)=>{
        this.trendingMovies = data.results
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

}
