import { Component, OnInit, Input } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { ForecastWeather } from '../model/forecast-weather';


@Component({
  selector: 'forecast-weather-card',
  templateUrl: './forecast-weather-card.component.html',
  styleUrls: ['./forecast-weather-card.component.css']
})
export class ForecastWeatherCardComponent implements OnInit {


  forecastList: ForecastWeather
    
  @Input('selectedCity')
  set setForecastWeather(city){
    this.http.getForecastWeather(city).subscribe(response => {
      this.forecastList = response;
      console.log(this.forecastList.list[0].main.temp)
    })
  }

  constructor(private http: WeatherApiService) { }

  ngOnInit() {

  }

}
