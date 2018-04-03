import { Component, OnInit } from '@angular/core';
import {Chapter} from "../../model/chapter.model";
import {ProductRepository} from "../../service/product-repository.service";
import {DiscountService} from "../../service/discount.service";

@Component({
  selector: 'app-servicing',
  templateUrl: './servicing.component.html',
  styleUrls: ['./servicing.component.css']
})
export class ServicingComponent {
  chapters: Chapter[] = [];
  //discounter: DiscountService = new DiscountService();
  constructor(public productRepository: ProductRepository) {
    this.chapters = [
      new Chapter('Using Service', 'Centralized manipulation of shared data'),
      new Chapter('Injecting Dependency', 'Using @Injectable and constructor'),
    ];
  }


}
