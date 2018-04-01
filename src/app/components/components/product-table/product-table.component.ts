import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product.model";
import {ProductRepository} from "../../../service/product-repository.service";
import {MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

  @Input('repository')
  productRepository: ProductRepository;

  columns = ['position', 'name', 'price', 'category', 'delete'];
  dataSource;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.getProducts());
    this.productRepository.productsChanged.subscribe(() => {
      console.log('trigger');
      this.dataSource = new MatTableDataSource(this.getProducts());
    })
  }

  getProduct(id: number): Product {
    return this.productRepository.getProduct(id);
  }

  getProducts(): Product[]{
    return this.productRepository.getProducts();
  }

  delete(data: any) {
    console.log(data);
  }

  showTable: boolean = true;

}
