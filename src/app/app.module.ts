import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { WebModule } from './layout/layout.module';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BellOutline } from '@ant-design/icons-angular/icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    WebModule,
    CommonModule,
    NzIconModule.forRoot([BellOutline])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  //ng build --output-path docs --base-href /blog/
}
