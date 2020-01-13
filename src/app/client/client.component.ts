import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {


  clock: number
  selectedCity: string

  getSelectedCity(city){
    this.selectedCity = city;
  }

  getTime(){
    return Date.now()
  }

  setTime(){
    setInterval(()=>{
      this.clock = this.getTime()
    }, 1000)
  }

  constructor() { }

  ngOnInit() {
  this.getSelectedCity("Gdańsk")
  this.setTime()
  }

}
