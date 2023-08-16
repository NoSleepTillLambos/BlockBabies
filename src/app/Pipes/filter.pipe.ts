import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    // check if search term is undefined first and then return all 
    if (!items) return [];
    if (!searchTerm) return items;
    
    searchTerm = searchTerm.toLowerCase();
    return items.filter(item => {
      return item.name.toLowerCase().includes(searchTerm);
    });
  }
  

}
