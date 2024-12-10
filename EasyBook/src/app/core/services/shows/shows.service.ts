import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { SHOWS_URL } from '../../constants/ApiUrls';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private http:HttpService) { }

   getShows(){
      return this.http.get(SHOWS_URL.getShows) 
   }

   createShow(data:any){
     return this.http.post(SHOWS_URL.getShows,data)
   }

   getShowByTimeAndMovieAndTheater(url:string){
     return this.http.get(SHOWS_URL.getShows+url)
   }

   updateShow(showId:string, data:any){
     return this.http.patch(SHOWS_URL.updateShow+showId, data)
   }
}
