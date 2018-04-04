import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product.model";
import {BasicProjectProductRepository} from "../../service/basic-project-product-repository.service";
import {MODES, SharedState} from "../../../model/shared-state.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'basic-project-form',
  templateUrl: './basic-project-form.component.html',
  styleUrls: ['./basic-project-form.component.css']
})
export class BasicProjectFormComponent {
  product: Product = new Product();

  constructor(private productRepository: BasicProjectProductRepository,
              private state: SharedState) {}

  get editing(): boolean {
    return this.state.mode == MODES.EDIT;
  }

  submitForm(form: NgForm) {
    if(form.valid) {
      this.productRepository.saveProduct(this.product);
      this.product = new Product();
      form.reset();
    }
  }

  resetForm() {
    this.product = new Product();
  }


  getIconStyle(modeString: number) {
     return this.state.mode.toString() == MODES[modeString] ? '#007bff' : '';
  }

}
