import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { SERVER_URL, THEATER_URLS } from '../../constants/ApiUrls';
import { MovieService } from '../movie/movie.service';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {
  city:string = ''
  constructor(private http:HttpService,private movieService:MovieService) {
      movieService.city.asObservable().subscribe(data=>this.city = data)
   }

   getTheatersByCity(id:string){
      return this.http.get(THEATER_URLS.getTheatersByCityAndMovie+id+"/"+this.city)
   }
}
