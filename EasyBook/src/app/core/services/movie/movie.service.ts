import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { MOVIE_URLS } from '../../constants/ApiUrls';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
   city=new BehaviorSubject<string>('');
  constructor(private http:HttpService) { 
    this.city.next(localStorage.getItem('city') ||'');
  }
   getMovies(){
      return this.http.get(MOVIE_URLS.getMovies)
   }

}
