import {ListChapterComponent} from "./list-chapter/list-chapter.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ListChapterItemComponent} from "./list-chapter/list-chapter-item/list-chapter-item.component";
import {
  MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatCheckboxModule, MatSidenavModule, MatToolbarModule,
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
  MatIconModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
];

@NgModule({
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
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
