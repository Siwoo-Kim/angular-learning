import {ListChapterComponent} from "./list-chapter/list-chapter.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ListChapterItemComponent} from "./list-chapter/list-chapter-item/list-chapter-item.component";
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSortModule,
  MatTableModule
} from "@angular/material";
import {TaxingPipe} from "./taxing.pipe";
import {FilterPipe} from "./filter.pipe";
import {SummaryComponent} from "./summary/summary.component";
import {DiscountPipe} from "../pipe/discount.pipe";

const components: any[] = [
  ListChapterComponent,
  ListChapterItemComponent,
  SummaryComponent,
  TaxingPipe,
  FilterPipe,
  DiscountPipe,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatSortModule,
  MatSelectModule,
  MatFormFieldModule,
];

@NgModule({
  imports: [
    MatButtonModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  declarations: [
    ListChapterComponent,
    ListChapterItemComponent,
    SummaryComponent,
    TaxingPipe,
    FilterPipe,
    DiscountPipe,
  ],
  exports: components,
})
export class SharedModule{ }
