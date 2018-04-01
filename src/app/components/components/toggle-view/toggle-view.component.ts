import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-view',
  templateUrl: './toggle-view.component.html',
  styleUrls: ['./toggle-view.component.css'],
})
export class ToggleViewComponent {
  showContent: boolean = true;

}
