import {Injectable} from "@angular/core";
import {BasicProjectStaticDatasource} from "./basic-project-static-datasource.service";
import {Product} from "../../model/product.model";

@Injectable()
export class BasicProjectProductRepository {
  private products: Product[];
  private readonly BY_ID = (product: Product, productId: number) => product.id == productId;

  constructor(private dataSource: BasicProjectStaticDatasource) {
    this.products = [];
    this.dataSource.getProducts().forEach(_product => this.products.push(_product));
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(productId: number): Product {
    return this.products.find(_product => this.BY_ID(_product, productId));
  }

  saveProduct(product: Product) {
    if(product.id == null || product.id == 0) {
      product.id = this.generateID();
      this.products.push(product);
    } else {
      let index = this.products.findIndex(_product => this.BY_ID(_product, product.id));
      this.products.splice(index, 1, product);
    }
  }

  deleteProduct(id: number) {
    let index = this.products.findIndex(_product => this.BY_ID(_product, id));
    if(index != -1){
      this.products.splice(index, 1);
    }
  }

  private generateID(): number {
    let candidate = 1;
    while(this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
