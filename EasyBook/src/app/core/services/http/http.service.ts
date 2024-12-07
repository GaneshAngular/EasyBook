
import { inject, Injectable } from '@angular/core';
import { SERVER_URL } from '../../constants/ApiUrls';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }
  http=inject(HttpClient)

  get(url:string){
    return this.http.get(SERVER_URL+url)
  }

  post(url:string, data:any){
    return this.http.post(SERVER_URL+url, data)
  }

  patch(url:string, data:any){
    return this.http.patch(SERVER_URL+url, data)
  }

  delete(url:string){
    return this.http.delete(SERVER_URL+url)
  }
}
