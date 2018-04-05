import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements AfterViewInit {
  @ViewChild('closeableIcon') closeableIcon : ElementRef;

  ngAfterViewInit(): void {
    $(this.closeableIcon.nativeElement).on('click', function () {
      $(this).closest('.text.container').transition('fade');
    })
  }

  constructor() { }

  ngOnInit() {
  }

}
