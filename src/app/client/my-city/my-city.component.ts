import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  } from 'ngx-webstorage';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';


@Component({
  selector: 'my-city',
  templateUrl: './my-city.component.html',
  styleUrls: ['./my-city.component.css']
})
export class MyCityComponent implements OnInit {

  
  myCities = [];

  @Input('addFavoritCity')
  set addFavoritCity(s){
    this.addMyCity(s)
    this.checkCitiesList(s)
  }

  addMyCity(mCity){

      if(this.localStorage.retrieve('cities') !== null){
        this.myCities = this.localStorage.retrieve('cities')
      }
      
      if(mCity){
        this.myCities.push(mCity)
        this.localStorage.store('cities', this.myCities )
      }
      
  }

  
  removeCity(indexC){
    var newFavorit =[]

    delete this.myCities[indexC]
    this.myCities.forEach((index)=>{
      if(indexC !== index){

        newFavorit.push(index)
      }
    })

    this.myCities = newFavorit;
    this.setStar(false)
    this.localStorage.store('cities', this.myCities )
    this.removeFavoritCity()
  }

  @Output("removeFavoritCity")
  emiterRemoveFavoritCity = new EventEmitter();

  removeFavoritCity(){
    this.emiterRemoveFavoritCity.emit("")
  }

  @Output("selectedCity")
  emiterSelectedCity = new EventEmitter();
  
  myCity(city){
    this.emiterSelectedCity.emit(city)
  }

  @Output("setStar")
  emiterStar = new EventEmitter();

  setStar(s){
    this.emiterStar.emit(s)
  }

  @Input('selectedCity')
  set setFavoritiesCity(city){
      this.checkCitiesList(city)
  }

  checkCitiesList(city){
    var result = false;

    if(this.myCities !== null){
      this.myCities.forEach((item)=>{
        if(city === item){
           return result = true
        }    
    })
    this.setStar(result)
    }
  

        
 }

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit() {
    // this.myCities = this.localStorage.retrieve('cities')
  }

}
