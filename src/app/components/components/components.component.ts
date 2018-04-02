import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Chapter} from "../../model/chapter.model";
import {ProductRepository} from "../../service/product-repository.service";
import {Product} from "../../model/product.model";
import {ListChapterComponent} from "../../shared/list-chapter/list-chapter.component";

import * as $ from 'jquery';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements AfterViewInit{

  chapters: Chapter[] = [];
  examples: Chapter[] = [];
  constructor(public productRepository: ProductRepository) {
    this.chapters = [
      new Chapter('@Component', 'Create a component',),
      new Chapter('Template', 'Create an inline or external template'),
      new Chapter('Binding', 'Use a data binding in the template'),
      new Chapter('Host Element', 'Sending Data to Host Element'),
      new Chapter('@ViewChildren', 'Query the content in the template')
    ];

    this.examples = [
      new Chapter('list1', 'list1 content', [new Chapter('list1-child', 'list1-child')]),
      new Chapter('list2', 'list2 content'),
      new Chapter('list3', 'list3 content'),
    ];
  }

  addProduct(product:Product) {
    this.productRepository.saveProduct(product);
    this.productRepository.productsChanged.emit();
  }

  @ViewChildren('listExample') viewChildren: QueryList<ElementRef>;
  $list;

  ngAfterViewInit(): void {
    this.$list = $(this.viewChildren.first.nativeElement);
    this.toggleList();
  }

  toggleList() {
    let height = this.$list.height();
    setTimeout(()=>{
      this.$list.animate({
        opacity: 0,
        height: 0,
      },500);
    },0);

    setTimeout(()=>{
      this.$list.animate({
        opacity: 1,
        height: height,
      },1500);
    },500);
  }
}
