import { Component, OnInit } from '@angular/core';
import {ProductRepository} from "../../service/product-repository.service";
import {Product} from "../../model/product.model";

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css'],
})
export class StructuralDirectiveComponent{
  _products: Product[] = [];
  _selectedProduct: Product;
  showTable: boolean = true;
  constructor(private productRepository: ProductRepository) {
    this._products = this.productRepository.getProducts().slice();
    this._selectedProduct = this._products[0];
  }

  get products(): Product[] {
    return this._products;
  }

}

