import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductListComponent} from './product-list-component'
import {ProductDetailComponent} from './product-detail-component';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
