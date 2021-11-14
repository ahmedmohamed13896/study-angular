import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {
  movies : any[] = [];
  movie : any ={};
  constructor(private _MoviesService:MoviesService, private activeRoute:ActivatedRoute,private router:Router ) {  }

  ngOnInit(): void {
    this._MoviesService.getTrendingmovies().subscribe({next: (data)=>{
      this.movies=data.results;
      this.movie = this.getCurrentMovie(this.movies);
    }})

  }

  getCurrentMovie(data:any[]){
    let urlArray = this.router.url.split('/');
    let id = urlArray[urlArray.length - 2]
    let currentMovie = {};
     data.forEach((movie)=> {
       if(movie.id == id){
        currentMovie = movie;
        }
      })
      console.log(currentMovie);

      return currentMovie;
  }


}
