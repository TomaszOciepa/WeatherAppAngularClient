import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "ngx-webstorage";

@Component({
  selector: "client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.css"],
})
export class ClientComponent implements OnInit {
  addFavoritCity;

  addMyFavoritCity(c) {
    this.addFavoritCity = c;
  }

  star;

  clock: number;
  selectedCity: string;

  setStar(s) {
    this.star = s;
  }

  getSelectedCity(city) {
    this.selectedCity = city;
  }

  getTime() {
    return Date.now();
  }

  setTime() {
    setInterval(() => {
      this.clock = this.getTime();
    }, 1000);
  }

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    // init
    var myTab = [];
    myTab = this.localStorage.retrieve("cities");
    if (myTab !== null && myTab.length >= 1) {
      this.getSelectedCity(myTab[0]);
    } else this.getSelectedCity("Warszawa");

    this.setTime();
  }
}
