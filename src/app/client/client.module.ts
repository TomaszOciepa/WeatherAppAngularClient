import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { FilterCityPipe } from './filter-city.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SearchCityComponent } from './search-city/search-city.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';



@NgModule({
  declarations: [
    ClientComponent,
    FilterCityPipe,
    SearchCityComponent,
    WeatherCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ], 
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
