import {Component, Input, OnInit} from '@angular/core';
import {DiscountService} from "../../../service/discount.service";

@Component({
  selector: 'app-discount-display',
  templateUrl: './discount-display.component.html',
  styleUrls: ['./discount-display.component.css']
})
export class DiscountDisplayComponent{
  //@Input() public discounter: DiscountService;

  constructor(public discounter: DiscountService){}
}
