import { Component } from '@angular/core';
import { ShowsService } from '../../core/services/shows/shows.service';
import { MovieService } from '../../core/services/movie/movie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import city from '../../core/constants/cities';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

  movies:any[]=[]
   cityList:any[]=city
   city:string=''
   constructor(private showsService:MovieService){
    showsService.city.asObservable().subscribe(data=>{
      console.log(data);
      this.city=data;
      console.log(this.city);
      
    })
  
    this.getMovies()
     
   }
    
   getMovies(){
    this.showsService.getMovies().subscribe((data:any)=>{
      console.log(data);
       this.movies=data;
     })
   }

   setCity(city:string){
    localStorage.setItem('city',city)
    this.getMovies()
    
   }


}
