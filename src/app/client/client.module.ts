import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientComponent } from "./client.component";
import { FilterCityPipe } from "./filter-city.pipe";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SearchCityComponent } from "./search-city/search-city.component";
import { WeatherCardComponent } from "./weather-card/weather-card.component";
import { WeatherApiService } from "./weather-api.service";
import { ForecastWeatherCardComponent } from "./forecast-weather-card/forecast-weather-card.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxWebstorageModule } from "ngx-webstorage";
import { MyCityComponent } from "./my-city/my-city.component";
import { MatIconModule } from "@angular/material";

@NgModule({
  declarations: [
    ClientComponent,
    FilterCityPipe,
    SearchCityComponent,
    WeatherCardComponent,
    ForecastWeatherCardComponent,
    MyCityComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgxWebstorageModule.forRoot(),
  ],
  exports: [ClientComponent],
  providers: [WeatherApiService],
})
export class ClientModule {}
