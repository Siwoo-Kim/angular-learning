import {SimpleDatasource} from "./simple-datasource.service";
import {Product} from "../model/product.model";


export class ProductRepository{
  private dataSource: SimpleDatasource;
  private products: Product[] = [];
  private locator = (_product: Product, _id: number) => { return _product.id == _id };

  constructor() {
    this.dataSource = new SimpleDatasource();
    this.dataSource.getProducts().forEach((_product: Product) => {
      this.products.push(_product);
    });
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((_product: Product) => this.locator(_product,id) );
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
