import {Injectable} from "@angular/core";
import {Product} from "../../model/product.model";

@Injectable()
export class BasicProjectStaticDatasource {
  private products: Product[];

  constructor() {
    this.products = [
      new Product(1, "Kayak", "Watersports", 275),
      new Product(2, "Lifejacket", "Watersports", 48.95),
      new Product(3, "Soccer Ball", "Soccer", 19.50),
      new Product(4, "Corner Flags", "Soccer", 34.95),
      new Product(5, "Thinking Cap", "Chess", 16),
      new Product(6, "Kayak-pro", "Watersports", 512),
      new Product(7, "Lifejacket-pro", "Watersports", 88.95),
      new Product(8, "Soccer Ball-pro", "Soccer", 83.23),
      new Product(9, "Corner Flags-pro", "Soccer", 74.95),
      new Product(10, "Thinking Cap-pro", "Chess", 35)
    ];
  }

  getProducts(): Product[] {
    return this.products.slice();
  }

}
