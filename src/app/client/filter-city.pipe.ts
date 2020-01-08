import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCity'
})
export class FilterCityPipe implements PipeTransform {

  transform(items: any[], searchCity: string): any[] {
    if(!items) return [];
    if(!searchCity) return items;

    searchCity = searchCity.toLowerCase();

    return items.filter( it =>{
      return it.toLowerCase().includes(searchCity);
    })
  }

}
