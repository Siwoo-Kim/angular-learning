import {SimpleDatasource} from "./simple-datasource.service";
import {Product} from "../model/product.model";
import {EventEmitter} from "@angular/core";


export class ProductRepository{
  private dataSource: SimpleDatasource;
  private products: Product[] = [];
  private locator = (_product: Product, _id: number) => { return _product.id == _id };
  public productsChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.dataSource = new SimpleDatasource();
    this.dataSource.getProducts().forEach((_product: Product) => {
      this.products.push(_product);
    });
  }

  /**
   * The method remove the first element add add new copy of removed element to the
   * end of products array.
   */
  swapProduct() {
    let p = this.products.shift();
    this.products.push(new Product(p.id, p.name, p.category, p.price));
    console.log(this.products);
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((_product: Product) => this.locator(_product,id) );
  }

  getCount(): number {
    return this.products.length;
  }

  saveProduct(product: Product) {
    if(!(product.id) || product.id == 0) {
      product.id = this.generateID();
      this.products.push(product);
    } else {
      let index = this.products.findIndex((_product: Product) => this.locator(_product,product.id) );
      this.products.splice(index,1,product);
    }
  }

  private generateID(): number {
    let candidate: number = 100;
    while(this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
