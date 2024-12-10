import { Component } from '@angular/core';
import { MovieService } from '../../core/services/movie/movie.service';
import { Router } from '@angular/router';
import { ShowsService } from '../../core/services/shows/shows.service';
import { TheaterService } from '../../core/services/theater/theater.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shows',
  standalone: true,
  imports: [CommonModule,FormsModule],

templateUrl: './shows.component.html',
  styleUrl: './shows.component.css'
})
export class ShowsComponent {

   movieData:any
id:string = ''
city=''
theaters:any[]=[]
  constructor(private theaterService:TheaterService,private router:Router,private movieService:MovieService){
           const url= this.router.url.split('/')
            this.id=url[url.length-1]
            this.movieService.getMoviesById(this.id).subscribe(movies =>this.movieData=movies)
            this.movieService.city.asObservable().subscribe(city =>{
              this.city=city;
              this.getTheatersByCityAndMovie()
            })
            
  }

  getTheatersByCityAndMovie(){
      this.theaterService.getTheatersByCity(this.id).subscribe((theaters:any)=>{
       const data=theaters
       console.log(theaters);
       
       this.theaters=data
     
       
      }),(err:any)=>{
        console.log(err);
        
      }
      
      
  }

  bookSeats(theater_id:any,movie_id:any,time:any) {
           this.router.navigate([`user/seats/${theater_id}/${movie_id}/${time}`])
    }
}
