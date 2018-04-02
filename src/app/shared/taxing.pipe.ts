import {Pipe, PipeTransform} from "@angular/core";


@Pipe({name: 'taxing'})
export class TaxingPipe implements PipeTransform{

  transform(value: any, taxRate: any): any {
    value = Number.parseFloat(value);
    taxRate = Number.parseFloat(taxRate || 0) / 100;
    return value + (value * taxRate);
  }

}
