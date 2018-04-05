import {AfterViewInit, Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit{
  childClosed: boolean = false;

  ngAfterViewInit(): void {
    $('.ui.dropdown').dropdown();
  }


  constructor() {

  }

}
