import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies : any[] = [];

  constructor(private _MoviesService: MoviesService) {
    this._MoviesService.getTrendingmovies().subscribe( {
      next: (data)=>{
        this.trendingMovies = data.results
      },
      error:(error)=>{
        console.log(error);
      },
      complete: () => console.info('complete')
    })
  }

  ngOnInit(): void {
  }
  showMovies(){
    console.log(this.trendingMovies);
  }
}
