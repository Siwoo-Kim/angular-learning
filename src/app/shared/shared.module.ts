import {ListChapterComponent} from "./list-chapter/list-chapter.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ListChapterItemComponent} from "./list-chapter/list-chapter-item/list-chapter-item.component";
import {MatTableModule} from "@angular/material";
import {TaxingPipe} from "./taxing.pipe";
import {FilterPipe} from "./filter.pipe";

const components: any[] = [
  ListChapterComponent,
  ListChapterItemComponent,
  TaxingPipe,
  FilterPipe,
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  declarations: components,
  exports: components,
})
export class SharedModule{ }
