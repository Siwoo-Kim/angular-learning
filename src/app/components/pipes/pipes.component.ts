import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chapter} from "../../model/chapter.model";
import {ProductRepository} from "../../service/product-repository.service";
import * as $ from 'jquery/dist/jquery.slim';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  chapters: Chapter[] = [];
  selectedProduct: number = 0;

  constructor(public productRepository: ProductRepository) {
    this.chapters = [
      new Chapter(`Pipe's databinding`, 'Format a data value'),
      new Chapter(`@Pipe decorator`, 'Create a custom pipe'),
      new Chapter(`Pipe chaining`, 'Format a data using multiple pipe'),
      new Chapter(`Pipe Angular provided`, 'Useful provided pipes', [
        new Chapter('@Number pipe'),
        new Chapter('@Percent pipe'),
        new Chapter('@Currency pipe'),
        new Chapter('@Json pipe'),
      ]),
    ];
  }

  taxRate: number;
  selectedCategory: string;

}
