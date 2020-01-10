import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentWeather } from './model/current-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  helloService(city){
    console.log("Hello service! Sprawdź mi "+city)
  }

  getCurrentWeather(city){
      return this.http.get<CurrentWeather>("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=5edc3ee7e769f70237953bb6d7580423&lang=pl")
      
  }

  constructor(private http: HttpClient) { }
}
