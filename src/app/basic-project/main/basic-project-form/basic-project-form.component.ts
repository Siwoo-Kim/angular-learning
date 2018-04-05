import {Component, DoCheck, Inject, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../../model/product.model";
import {BasicProjectProductRepository} from "../../service/basic-project-product-repository.service";
import {MODES, SHARED_STATE, SharedState} from "../../../model/shared-state.model";
import {NgForm} from "@angular/forms";
import {BasicProjectMessageService} from "../../../service/basic-project-message.service";
import {Message} from "../../../model/message.model";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import 'rxjs/Rx';

@Component({
  selector: 'basic-project-form',
  templateUrl: './basic-project-form.component.html',
  styleUrls: ['./basic-project-form.component.css']
})
export class BasicProjectFormComponent implements OnDestroy{

  product: Product = new Product();
  lastId: number;
  stateSubscription: Subscription;

  constructor(private productRepository: BasicProjectProductRepository,
              private messageService: BasicProjectMessageService,
              @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
    this.stateSubscription =
      this.stateEvents
        // .skipWhile(state => state.mode == MODES.EDIT)
        .distinctUntilChanged((firstState: SharedState, secondState: SharedState) => {
          return firstState.id == secondState.id;
        })
        .filter((state: SharedState) => {
          let target: number = 3;
          if(state.id == target) {
            this.messageService.reportMessage(new Message('You cannot change the Product of id : ' + state.id, true));
          }
          return state.id != target;
        })
        .subscribe((state: SharedState) => {
      this.product = new Product();
      if(state.id != undefined ) {
        Object.assign(this.product, this.productRepository.getProduct(state.id));
      }
      this.editing = state.mode == MODES.EDIT;
    })
  }

  ngOnDestroy(): void {
    this.stateSubscription.unsubscribe();
  }

  editing: boolean = false;

  submitForm(form: NgForm) {
    if(form.valid) {
      this.productRepository.saveProduct(this.product);
      this.product = new Product();
      this.messageService.reportMessage( new Message('Message is created'));
      form.reset();
    }
  }

  resetForm() {
    this.product = new Product();
  }

  getIconStyle(modeString: number) {
     return this.editing ? '#007bff' : '';
  }

}
