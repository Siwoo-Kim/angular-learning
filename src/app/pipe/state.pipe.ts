import {Pipe, PipeTransform} from "@angular/core";
import {ProductRepository} from "../service/product-repository.service";
import {MODES, SharedState} from "../model/shared-state.model";
import {BasicProjectProductRepository} from "../basic-project/service/basic-project-product-repository.service";


@Pipe({
  name : 'state',
  pure : true
})
export class StatePipe implements PipeTransform{
  constructor(private productRepository: BasicProjectProductRepository) {}
  transform(value: any): any {
    if(value instanceof SharedState) {
      let state = value as SharedState;
      return MODES[state.mode] + " " +(  (state.id != null) ? ` >  Name: ${this.productRepository.getProduct(state.id).name }` : '' );
    } else {
      return `< No Date >`;
    }
  }

}
