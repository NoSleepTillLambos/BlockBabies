import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any[], filterString: string, category: string): any[] {
    const resultArray = []
    if(value.length === 0 || filterString === '' || category === ''){
      return value;
    }

    for(const item of value){
      if (item[category] === filterString) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
