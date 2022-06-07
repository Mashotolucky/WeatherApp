import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

    options = {
    method: "GET",
    hostname: "weatherapi-com.p.rapidapi.com",
    port: null,
    path: "/forecast.json?q=Pretoria&days=4",
   
  };


  forecastData: any;

  constructor(private http: HttpClient) { }

  forcast(): Observable<any>{

    let headers=new HttpHeaders();
    headers=headers.set('X-RapidAPI-Key',"9c00e3a58dmsh03dba41d18c889ep1917dajsnf0cd70ba9382");

    this.forecastData = this.http.get("https://weatherapi-com.p.rapidapi.com"+this.options.path,{headers});

    return this.forecastData;

  }
}
