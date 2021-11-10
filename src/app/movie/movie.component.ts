import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movieId :any;
  moviesArray:any[] = [];
  movie :any ={};
  movieLength: number=0;
  currentIndex : any;

  constructor(private route:Router, private movieRoute :ActivatedRoute,private MoviesService:MoviesService) { }
  ngOnInit(): void {
    console.log('load movie');

    this.movieId = this.movieRoute.snapshot.paramMap.get('id');
    this.MoviesService.getTrendingmovies().subscribe({
      next:(movies)=>{
        this.moviesArray = movies.results;
        this.movie = this.moviesArray.find(movie => movie.id == this.movieId);
        this.movieLength = Object.keys(this.movie).length;
        this.currentIndex =  this.moviesArray.findIndex(movie => movie.id == this.movieId);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  goToMovies(){
    this.route.navigate(['/movies'])
  }

  getMovie() {
    console.log(this.movie);
  }

  goPrev(event:any){
    if(this.currentIndex > 0){
      this.currentIndex--;
      let prevID = this.moviesArray[this.currentIndex].id;
      this.movie = this.moviesArray.find(movie => movie.id == prevID);
      this.route.navigate(['/movies',prevID ]);
    }
  }

  goNext(event:any){
    if(this.currentIndex + 1 < this.moviesArray.length ){
      this.currentIndex++;
      let nextID = this.moviesArray[this.currentIndex].id;
      this.movie = this.moviesArray.find(movie => movie.id == nextID);
      this.route.navigate(['/movies', nextID]);
    }
  }

}
