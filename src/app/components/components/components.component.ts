import { Component, OnInit } from '@angular/core';
import {Chapter} from "../../model/chapter.model";
import {ProductRepository} from "../../service/product-repository.service";
import {Product} from "../../model/product.model";


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent  {
  chapters: Chapter[] = [];
  constructor(public productRepository: ProductRepository) {
    this.chapters = [
      new Chapter('@Component', 'Create a component',),
      new Chapter('Template', 'Create an inline or external template'),
      new Chapter('Binding', 'Use a data binding in the template'),
      new Chapter('Host Element', 'Sending Data to Host Element'),
      new Chapter('@ViewChildren', 'Query the content in the template')
    ];
  }

  addProduct(product:Product) {
    this.productRepository.saveProduct(product);
    this.productRepository.productsChanged.emit();
  }

}
