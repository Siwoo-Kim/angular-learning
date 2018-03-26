import { Component, OnInit } from '@angular/core';
import {ProductRepository} from "../../../service/product-repository.service";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
})
export class EventBindingComponent {
  selectedProduct: string;
  selectedProductWithTwoWay: string;

  constructor(public productRepository: ProductRepository) { }

  getProducts(): Product[] {
    return this.productRepository.getProducts();
  }

  getSelect(product: Product): boolean {
    return (product && product.name && this.selectedProduct )
    && (this.selectedProduct.toLowerCase() == product.name.toLowerCase() );
  }
}
