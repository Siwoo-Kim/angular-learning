import {ApplicationRef, Component} from "@angular/core";
import {ProductRepository} from "../service/product-repository.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Product} from "../model/product.model";


@Component({
  selector: 'product',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {
  fontSizeWithUnits: string = '30px';
  fontSizeWithoutUnits: string = '30';

  constructor(public productRepository: ProductRepository,
              // ref: ApplicationRef,
              ) {
    // (<any>window).appRef = ref;
    // (<any>window).productRepository = this.productRepository;
  }

  // getProductByPosition(position: number): Product {
  //   return this.productRepository.getProducts()[position];
  // }
  //
  // getClassesByPosition(position: number): string {
  //   let product = this.getProductByPosition(position);
  //   return 'p-1 '+ ( product.price < 50 ? 'bg-info' : 'bg-warning' );
  // }

  getClass(): string {
    return this.productRepository.getProducts().length > 5 ? 'bg-success' : 'bg-warning';
  }

  getClassById(productId: number) {
    let product: Product = this.productRepository.getProduct(productId);
    return 'card '+ ( product.price > 50  ? 'bg-warning' : 'bg-info' );
  }

  getClassMapById(productId: number): any {
    let product: Product = this.productRepository.getProduct(productId);
    return {
      'text-center bg-danger' : product.name == 'Kayak',
      'text-warning' : product.price > 50,
    };
  }

  getStyles(productId: number) {
    let product: Product = this.productRepository.getProduct(productId);
    return {
      'fontSize': '30px',
      'margin': '100px',
      'color': (product.price > 50 ? 'purple' : 'blue')
    }
  }
}
