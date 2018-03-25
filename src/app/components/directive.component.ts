import {ApplicationRef, Component} from "@angular/core";
import {Product} from "../model/product.model";
import {ProductRepository} from "../service/product-repository.service";

@Component({
  selector: 'directive',
  templateUrl: './directive.component.html'
})
export class DirectiveComponent {
  tagName: string = 'Kayak';
  constructor(public productRepository: ProductRepository,
  ) {
    productRepository.swapProduct();
  }

  getProductByIndex(index: number): Product {
    return this.productRepository.getProducts()[index];
  }

  getProduct(productId: number): Product {
    return this.productRepository.getProduct(productId);
  }

  getProducts(): Product[] {
    return this.productRepository.getProducts();
  }

  getProductCount(): number {
    return this.productRepository.getCount();
  }



}
