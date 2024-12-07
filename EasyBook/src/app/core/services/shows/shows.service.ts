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
}
