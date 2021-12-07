import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

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
  showPrev:boolean =true;
  showNext:boolean =true;

  constructor(private router:Router, private movieRoute :ActivatedRoute,private MoviesService:MoviesService) { }
  ngOnInit(): void {
    console.log('load movie');


    // this.movieId = this.movieRoute.snapshot.paramMap.get('id');
    this.movieRoute.paramMap.subscribe({
      next:(params:ParamMap)=>{
        this.movieId = params.get('id');
      }
    });

    this.MoviesService.getTrendingmovies().subscribe({
      next:(movies)=>{
        this.moviesArray = movies.results;
        this.movie = this.moviesArray.find(movie => movie.id == this.movieId);
        this.movieLength = Object.keys(this.movie).length;
        this.currentIndex =  this.moviesArray.findIndex(movie => movie.id == this.movieId);
        this.checkCurrentId();

      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  goToMovies(){
    let selectedId = this.movieId ? this.movieId : null ;
    // PASSING OPTIONAL PARAMETER
    // USING IT TO SHOW MOVIE ID LIKE THIS  http://localhost:4200/movies;id=618162 WHEN GO BACK
    this.router.navigate(['../', { id: selectedId }] , {relativeTo:this.movieRoute});
  }

  logMovie() {
    console.log(this.movie);
  }

  // GO TO PREV MOVIE
  goPrev(){
    if(this.currentIndex > 0){
      this.currentIndex--;
      let prevID = this.moviesArray[this.currentIndex].id;
      this.movie = this.moviesArray.find(movie => movie.id == prevID);
      this.movieId =prevID;
      this.router.navigate(['../',prevID] , {relativeTo:this.movieRoute});
    }


    this.checkCurrentId();


  }

  // GO TO NEXT MOVIE
  goNext(){
    if(this.currentIndex + 1 < this.moviesArray.length ){
      this.currentIndex++;
      let nextID = this.moviesArray[this.currentIndex].id;
      this.movie = this.moviesArray.find(movie => movie.id == nextID);
      this.movieId =nextID;
      this.router.navigate(['../', nextID] , {relativeTo:this.movieRoute});

    }

    this.checkCurrentId();
  }


  // CHECK THE LENGTH OF MOVIE ARRAY TO SHOW AND HIDE NEXT & PREV BUTTONS
  checkCurrentId(){
    this.currentIndex == 0 ? this.showPrev = false : this.showPrev =true;
    this.currentIndex + 1 == this.moviesArray.length ? this.showNext =  false : this.showNext =true;
  }


  showOverview(){
    this.router.navigate(['overview'] , {relativeTo: this.movieRoute})
  }

}
