import {Injectable} from "@angular/core";
import {BasicProjectStaticDatasource} from "./basic-project-static-datasource.service";
import {Product} from "../../model/product.model";
import {RestDatasource} from "../../service/rest-datasource.service";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BasicProjectProductRepository {
  private products: Product[];
  private readonly BY_ID = (product: Product, productId: number) => product.id == productId;

  constructor(private dataSource: RestDatasource) {
    this.products = [];
    this.dataSource.get('products').subscribe(data => this.products = data);
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductFetch(id: number): Observable<Product>{
    return this.dataSource.get(`/products/${id}`);
  }

  getProduct(id: number) {
    return this.products.find(_product => this.BY_ID(_product,id));
  }


  saveProduct(product: Product) {
    if(product.id == 0 || product.id == null) {
      this.dataSource.post('products', product).subscribe(product => this.products.push(product) );
    } else {
      this.dataSource.put(`products/${product.id}`, product).subscribe( product => {
        console.log(product);
        let index = this.products.findIndex(_product => this.BY_ID(_product, product.id));
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
