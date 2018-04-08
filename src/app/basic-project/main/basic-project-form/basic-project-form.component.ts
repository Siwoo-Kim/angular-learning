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
import {ActivatedRoute, Router, UrlSegment} from "@angular/router";

@Component({
  selector: 'basic-project-form',
  templateUrl: './basic-project-form.component.html',
  styleUrls: ['./basic-project-form.component.css']
})
export class BasicProjectFormComponent implements OnDestroy{

  product: Product = new Product();
  lastId: number;
  stateSubscription: Subscription;
  editing: boolean = false;

  constructor(private productRepository: BasicProjectProductRepository,
              private messageService: BasicProjectMessageService,
              private route: ActivatedRoute,
              private router: Router,
              @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
      this.editing = this.route.snapshot.url[1].path == 'edit';
      let productId = this.route.snapshot.params['id'];

      // if(this.route.snapshot.params['name'] != null && this.route.snapshot.params['category'] != null && this.route.snapshot.params['price'] != null ){
      //   console.log('Name from Matrix Parameter: ' + this.route.snapshot.params['name'] );
      //   console.log('Category from Matrix Parameter: ' + this.route.snapshot.params['category'] );
      //   console.log('Price from Matrix Parameter: ' + this.route.snapshot.params['price'] );
      // }

      this.product = Object.assign(this.product, productId != null? this.productRepository.getProduct(productId) : new Product() );

    // this.stateSubscription =
    //   this.stateEvents
    //     // .skipWhile(state => state.mode == MODES.EDIT)
    //     .distinctUntilChanged((firstState: SharedState, secondState: SharedState) => {
    //       return firstState.id == secondState.id;
    //     })
    //     .filter((state: SharedState) => {
    //       let target: number = 3;
    //       if(state.id == target) {
    //         this.messageService.reportMessage(new Message('You cannot change the Product of id : ' + state.id, true));
    //       }
    //       return state.id != target;
    //     })
    //     .subscribe((state: SharedState) => {
    //   this.product = new Product();
    //   if(state.id != undefined ) {
    //     Object.assign(this.product, this.productRepository.getProduct(state.id));
    //   }
    //   this.editing = state.mode == MODES.EDIT;
    // })
  }

  ngOnDestroy(): void {
    // this.stateSubscription.unsubscribe();
  }


  submitForm(form: NgForm) {
    if(form.valid) {
      this.productRepository.saveProduct(this.product);
      // this.product = new Product();
      // this.messageService.reportMessage( new Message('Message is created'));
      // form.reset();
      this.router.navigate(['/basic-project']);
    }
  }

  resetForm() {
    this.product = new Product();
  }

  getIconStyle(modeString: number) {
     return this.editing ? '#007bff' : '';
  }

}
