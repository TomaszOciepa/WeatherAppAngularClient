import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentWeather } from './model/current-weather';
import { ForecastWeather } from './model/forecast-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  token = "5edc3ee7e769f70237953bb6d7580423"

  getCurrentWeather(city){
      return this.http.get<CurrentWeather>("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID="+this.token+"&lang=pl")
      
  }

  getForecastWeather(city){
    return this.http.get<ForecastWeather>("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&APPID="+this.token+"&lang=pl")
  }

  constructor(private http: HttpClient) { }
}
