import {Component, Input, OnInit} from '@angular/core';
import {Chapter} from "../../model/chapter.model";

@Component({
  selector: 'app-list-chapter',
  templateUrl: './list-chapter.component.html',
  styleUrls: ['./list-chapter.component.css']
})
export class ListChapterComponent {
  @Input() chapters: Chapter[];
  @Input() title: string;

}
