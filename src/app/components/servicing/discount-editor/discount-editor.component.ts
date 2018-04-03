import {Component, Input, OnInit} from '@angular/core';
import {DiscountService} from "../../../service/discount.service";

@Component({
  selector: 'app-discount-editor',
  templateUrl: './discount-editor.component.html',
  styleUrls: ['./discount-editor.component.css']
})
export class DiscountEditorComponent {
  //@Input() public discounter: DiscountService;

  constructor(public discounter: DiscountService){}

}
