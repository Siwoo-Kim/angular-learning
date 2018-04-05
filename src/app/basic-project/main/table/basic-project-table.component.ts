import {Component, Inject, OnInit} from '@angular/core';
import {BasicProjectProductRepository} from "../../service/basic-project-product-repository.service";
import {SharedModule} from "../../../shared/shared.module";
import {Product} from "../../../model/product.model";
import {MODES, SHARED_STATE, SharedState} from "../../../model/shared-state.model";
import {Observer} from "rxjs/Observer";

@Component({
  selector: 'basic-project-table',
  templateUrl: './basic-project-table.component.html',
  styleUrls: ['./basic-project-table.component.css']
})
export class BasicProjectTable {
  selectedProduct: Product = this.getProduct(1);

  constructor(private projectRepository: BasicProjectProductRepository,
              @Inject(SHARED_STATE) private stateObserver: Observer<SharedState>) {}

  getProduct(id: number): Product {
    return this.projectRepository.getProduct(id);
  }

  getProducts(): Product[] {
    return this.projectRepository.getProducts();
  }

  deleteProduct(id: number): boolean {
    this.projectRepository.deleteProduct(id);
    return this.getProduct(id) == null;
  }

  editProduct(id: number) {
    // this.state.id = id;
    // this.state.mode = MODES.EDIT;
    this.stateObserver.next(new SharedState(MODES.EDIT, id));
  }

  createProduct() {
    // this.state.id = undefined;
    // this.state.mode = MODES.CREATE;
    this.stateObserver.next(new SharedState(MODES.CREATE));
  }
}
