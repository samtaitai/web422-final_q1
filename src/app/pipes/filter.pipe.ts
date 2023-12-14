import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(cities: string[], searchText: string): string[] {
    if (!cities || !searchText) return cities;
    return cities.filter((city: string) => {
      return city.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}
