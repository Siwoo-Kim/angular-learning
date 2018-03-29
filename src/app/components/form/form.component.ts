import { Component } from '@angular/core';
import {ProductRepository} from "../../service/product-repository.service";
import {Product} from "../../model/product.model";
import {NgForm, NgModel} from "@angular/forms";

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

  getFormError(ngModel: any): string[] {
  let name = ngModel.path;
  let messages: string[] = [];
  console.log(ngModel);
  if(ngModel.errors) {
    for(let error in ngModel.errors) {
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
  formSubmitted: boolean = false;
  productCreated: boolean = false;


  submitForm(form: NgForm) {
    this.formSubmitted = true;
    this.productCreated = true;
    if(form.valid) {
      this.addProduct(this._newProduct);
      form.reset();
      this.formSubmitted = false;

      setTimeout(function () {
        this._newProduct = new Product();
        this.productCreated = false;
      },2000);
    }
  }

}



































