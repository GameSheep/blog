import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { HttpClientModule } from '@angular/common/http';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { RouterModule } from '@angular/router';
import { PageListComponent } from './list/list.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@NgModule({
  imports: [
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzButtonModule,
    CommonModule,
    NzGridModule,
    NzProgressModule,
    NzDropDownModule,
    NzCheckboxModule,
    NzPaginationModule,
    NzInputModule,
    HttpClientModule,
    NzAnchorModule,
    NzBackTopModule,
    NzDatePickerModule,
    NzSelectModule,
    NzBreadCrumbModule,
    NzCarouselModule,
    NzInputNumberModule,
    NzAffixModule,
    NzDrawerModule,
    NzModalModule,
    NzDividerModule,
    NzEmptyModule,
    NzPopoverModule,
    RouterModule,
    NzListModule,
    NzMessageModule,
    NzSkeletonModule
  ],
  declarations: [
    PageListComponent
  ],
  providers: [],
  exports: [
    PageListComponent
  ],
})
export class PagesModule { }
