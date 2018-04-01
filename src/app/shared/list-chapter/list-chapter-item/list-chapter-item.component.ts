import {Component, Input, OnInit} from '@angular/core';
import {Chapter} from "../../../model/chapter.model";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-chapter-item.component.html',
  styleUrls: ['./list-chapter-item.component.css']
})
export class ListChapterItemComponent {
  @Input() chapter: Chapter;

}
