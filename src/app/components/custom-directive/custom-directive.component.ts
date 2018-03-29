import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {FormControl, FormGroup, NgForm, Validator, Validators} from "@angular/forms";
import {Product} from "../../model/product.model";
import {ProductRepository} from "../../service/product-repository.service";

export class ProductFormControl extends FormControl{
  name: string;

  constructor(name: string, value: any, validators: any) {
    super(value, validators);
    this.name = name;
  }
}

export class ProductFormGroup extends FormGroup{
  constructor() {
    super( {
      name: new ProductFormControl('name', '',
        Validators.compose([
          Validators.required,
        ])),
      category: new ProductFormControl('category', '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$'),
        ])),
      price: new ProductFormControl('price','',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9\.]+$'),
        ]))
    })
  }

  get productControls() :ProductFormControl[] {
    return Object.keys(this.controls).map(key => this.controls[key] as ProductFormControl);
  }
}

interface Element {
  position: number;
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent {
  form: ProductFormGroup = new ProductFormGroup();
  dataSource: MatTableDataSource<Element>;
  products: Product[];
  elements: Element[];
  displayColumns: string[] = ['position', 'name', 'price', 'category'];

  constructor(private productRepository: ProductRepository) {
    this.products = this.productRepository.getProducts().slice();

    this.elements = this.products.map((product,index) => {
      return {'position': index+1, 'name': product.name, 'price': product.price, 'category' : product.category}
    });
    this.dataSource = new MatTableDataSource(this.elements);
  }

  submitForm(form: any) {

  }
}
