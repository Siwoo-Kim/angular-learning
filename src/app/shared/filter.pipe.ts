import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform{

  transform(array: any[], key: any, filterValue: any): any {
    if(!key || !filterValue) { return array; }

    return array
      .filter(item => item[key].toLowerCase() == filterValue.toLowerCase() );
  }

}
