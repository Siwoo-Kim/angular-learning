import { Component } from '@angular/core';
import {ProductRepository} from "../../service/product-repository.service";
import {Product} from "../../model/product.model";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  _newProduct: Product = new Product();

  constructor(public productRepository: ProductRepository) { }

  getProduct(id: number): Product {
    return this.productRepository.getProduct(id);
  }

  getProdcuts(): Product[] {
    return this.productRepository.getProducts();
  }

  get newProduct() {
    return JSON.stringify(this._newProduct);
  }

  addProduct(product: Product) {
    console.log("New Product: " + JSON.stringify(product));
  }

  getFormError(ngModel: NgModel): string[] {
    let name = ngModel.path;
    let messages: string[] = [];

    if(ngModel.errors) {
     for(let error in ngModel.errors) {
        console.log(error);
        switch(error) {
          case 'required': messages.push(`${name} must not null`); break;
          case 'minlength': messages.push(`${name} has more than ${ngModel.errors[error].requiredLength}`);  break;
          case 'maxlength': messages.push(`${name} has less than ${ngModel.errors[error].requiredLength}`);  break;
          case 'pattern': messages.push(`${name} has illegal format`);
        }
     }
     return messages;
    }
  }
}
