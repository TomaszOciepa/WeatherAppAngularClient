import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {


  characters = [
    'Chojnice',
    'Gdańsk',
    'Warszawa',
    'Kraków',
    'Szczecin',
    'Olsztyn',
    'Poznań',
    'Bydgoszcz',
    'Łódź',
    'Wrocław',
    'Częstochowa',
    'Zakopane',
    'Katowice',
    'Kielce',
    'Zielona Góra',
    'Kołobrzeg',
    'Gdynia',
    'Sopot',
  ]

  myCity(city){
    console.log(city)
  } 
  
  constructor() { }

  ngOnInit() {
  }

}
