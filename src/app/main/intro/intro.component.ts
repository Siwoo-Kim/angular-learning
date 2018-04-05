import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements AfterViewInit {
  @ViewChild('closeableIcon') closeableIcon : ElementRef;
  @Output() closed: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngAfterViewInit(): void {
    var closed = this.closed;
    $(this.closeableIcon.nativeElement).on('click', function () {
      $(this).closest('.text.container').transition('fade');
      setTimeout(()=>{closed.emit(true);},1000);

    })
  }

  constructor() { }

  ngOnInit() {
  }

}
