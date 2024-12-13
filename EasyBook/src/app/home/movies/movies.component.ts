import { Component } from '@angular/core';
import { ShowsService } from '../../core/services/shows/shows.service';
import { MovieService } from '../../core/services/movie/movie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import city from '../../core/constants/cities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  movies: any[] = [];
  cityList: any[] = city;
  city: string = '';
  constructor(private movieService: MovieService, private router: Router) {
    movieService.city.asObservable().subscribe((data) => {
      this.city = data;
      console.log(this.city);

      this.getMoviesByCity();
    });
  }

  getMovies() {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data;
    });
  }
  getMoviesByCity() {
    this.movieService.getMoviesByCity(this.city).subscribe(
      (data: any) => {
        console.log(data.length);
        this.movies = data;
      },
      (error) => {
        console.log(error.error.text);
      }
    );
  }

  setCity(city: string) {
    this.movieService.city.next(city);
  }

  getMovieDetails(id: string) {
    this.router.navigate(['user/movies/' + id]);
  }
  ngOnDestroy(): void {
    localStorage.setItem('city', this.city);
  }
}
