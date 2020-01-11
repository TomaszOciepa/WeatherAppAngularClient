import { Component, OnInit, Input, Optional } from '@angular/core';
import { CurrentWeather } from '../model/current-weather';
import { WeatherApiService } from '../weather-api.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  currentWeather: CurrentWeather

  name
  date
  wind
  clouds
  humidity
  pressure
  temp
  temp_min
  temp_max
  sunrise
  sunset
  description
  icon
  
  @Input('selectedCity')
  set setSelectedCity(city){
      this.http.getCurrentWeather(city).subscribe(response =>{
          this.name = response.name;
          this.date = Date.now();
          this.wind = response.wind.speed;
          this.clouds = response.clouds.all;
          this.humidity = response.main.humidity;
          this.pressure = response.main.pressure;
          this.temp = Math.round(response.main.temp);
          this.temp_min = Math.round(response.main.temp_min);
          this.temp_max = Math.round(response.main.temp_max);
          this.sunrise = response.sys.sunrise;
          this.sunset = response.sys.sunset;
          this.description = response.weather[0].description;
          this.icon = "http://openweathermap.org/img/wn/"+response.weather[0].icon+"@2x.png";
            // this.sunrise=  new DatePipe('en').transform(response.sys.sunrise, 'hh-mm', 'GMT+1')
      })
      
  }

    
  constructor(private http:WeatherApiService) { }

  ngOnInit() {
  }

}
