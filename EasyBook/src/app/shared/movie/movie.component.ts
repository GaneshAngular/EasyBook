import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../core/services/movie/movie.service';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule,FormsModule,DatePipe,TitleCasePipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
     
  movieData:any 
  constructor(private router: Router,private movieService:MovieService){
         const url= this.router.url.split('/')
         const id=url[url.length-1]
         movieService.getMoviesById(id).subscribe((data)=>{
           this.movieData=data;
           console.log(data);
         })
 
  }

  bookTicket(id:string){
    this.router.navigate(['shows/'+id])
  }
}
