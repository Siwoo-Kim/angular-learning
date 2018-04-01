import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  form: FormGroup;
  newProduct: Product = new Product();
  @Output('newProductEvent')
  newProductEventEmitter :EventEmitter<Product> = new EventEmitter<Product>();
  formSubmitted:boolean = false;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });
  }

  submitForm() {
    this.formSubmitted = true;
    if(this.form.valid) {
      this.newProductEventEmitter.emit(this.newProduct);
      this.newProduct = new Product();
      this.form.reset();
      this.formSubmitted = false;
    }
  }


}
