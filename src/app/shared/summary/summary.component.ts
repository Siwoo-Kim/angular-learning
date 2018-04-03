import {Component, Input, OnInit} from '@angular/core';
import {Chapter} from "../../model/chapter.model";
import {ProductRepository} from "../../service/product-repository.service";
import {Product} from "../../model/product.model";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() title;
  @Input() chapters :Chapter[];
  products: Product[];

  constructor(){
  }


}
