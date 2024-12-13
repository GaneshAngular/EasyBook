import { Component } from '@angular/core';
import { ShowsService } from '../../../core/services/shows/shows.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieService } from '../../../core/services/movie/movie.service';
import { TheaterService } from '../../../core/services/theater/theater.service';
import city from '../../../core/constants/cities';

@Component({
  selector: 'app-admin-shows',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
templateUrl: './admin-shows.component.html',
  styleUrl: './admin-shows.component.css'
})
export class AdminShowsComponent {

  shows:any[]=[]
  movies:any[]=[]
  theaters:any[]=[]
  selectedTheater=''
   timings:string[]=[]
 cities=city
   showMovies:any[]=[]
   showTheater:any[]=[]
  constructor(private showsService:ShowsService,private MovieService:MovieService,private theatersService:TheaterService){
      
     this.MovieService.getMovies().subscribe((movies:any)=>{
       this.movies=movies;
       
     })
     this.theatersService.getTheaters().subscribe((theater:any)=>{
          this.theaters=theater;
  

     })
     this.getShows()
     
    }
     getShows(){
      this.showsService.getShows().subscribe((shows:any)=>{
        this.shows=shows;
      })
     }

 

  showsForm=new FormGroup({
    movie_id:new FormControl('',[]),
    theater_id:new FormControl('',[]),
    city:new FormControl('',[]),
    date:new FormControl('',[]),
    time:new FormControl('',[]),
    seatsFilled:new FormControl([],[]),
    prices:new FormControl([],[])
  })

  onSelectTheater(){
        this.theatersService.getTheaterById(this.selectedTheater).subscribe((theaters:any)=>{
              this.timings=theaters.timings;
        })
  }


  createShow(){
    this.showsService.createShow(this.showsForm.value).subscribe((data:any)=>{
      if(data){
        alert("Show created ")
        this.getShows()
      }else{
        alert("Failed to create show")
      }
    })
  }

 

}
