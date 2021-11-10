import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  trendingMovies :any[] =[];
  selectedId :any;

  constructor(private _MoviesService:MoviesService, private moveiRoute: Router, private activeRoute : ActivatedRoute) { }


  ngOnInit(): void {
    // USING PARAMMAP OBSERVABLE OF THE ACTIVEROUTER TO SUBSCRIBE ON THE PARAMETER ID AND CHECK IF IT IS CHANGED
    this.activeRoute.paramMap.subscribe({
      next:(params:ParamMap)=>{
        this.selectedId = params.get('id');
      }
    })

    this._MoviesService.getTrendingmovies().subscribe( {
      next: (data)=>{
        this.trendingMovies = data.results;
      },
      error:(error)=>{
        console.log(error);
      }
    })


  }

  onSelect(movie:any){
    this.moveiRoute.navigate([movie.id],{relativeTo:this.activeRoute});
  }

  isSelected(movie:any){
    return this.selectedId == movie.id
  }
}
