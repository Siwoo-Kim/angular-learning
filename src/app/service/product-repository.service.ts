import {Product} from "../model/product.model";
import {EventEmitter, Injectable} from "@angular/core";
import {RestDatasource} from "./rest-datasource.service";

@Injectable()
export class ProductRepository{
  // private dataSource: SimpleDatasource;
  private products: Product[] = [];
  private locator = (_product: Product, _id: number) => { return _product.id == _id };
  public productsChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor(public dataSource: RestDatasource) {
    // this.dataSource = new SimpleDatasource();
    this.dataSource.get('products').subscribe(data => {
      this.products = data;
    })
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
    if(product.id == 0 || product.id == null) {
      this.dataSource.post('products', product).subscribe(product => this.products.push(product) );
    } else {
      this.dataSource.put(`products/${product.id}`, product).subscribe( product => {
        console.log(product);
        let index = this.products.findIndex(_product => this.locator(_product, product.id));
        this.products.splice(index, 1, product);
      })
    }
  }

  deleteProduct(product: Product) {
    this.dataSource.delete(`/products/${product.id}`).subscribe(() => {
      let index = this.products.findIndex(_product => _product.id == product.id );
      this.products.splice(index, 1);
    })
  }

  private generateID(): number {
    let candidate: number = 100;
    while(this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
