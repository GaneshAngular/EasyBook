import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import city from '../../core/constants/cities';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShowsService } from '../../core/services/shows/shows.service';
import { MovieService } from '../../core/services/movie/movie.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
       
  cities: string[] =city
   city:string =''
  constructor(private movieService:MovieService){
        const local=localStorage.getItem('city') || ''
        if(local){
          this.city=local;
        }
  } 

  setCity(){
      localStorage.setItem('city',this.city)
      this.movieService.city.next(this.city)
    }
}
