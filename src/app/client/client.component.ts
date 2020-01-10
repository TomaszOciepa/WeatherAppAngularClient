import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {


  selectedCity: string

  getSelectedCity(city){
    this.selectedCity = city;
  }

  constructor() { }

  ngOnInit() {
  this.getSelectedCity("Gdańsk")
  }

}
