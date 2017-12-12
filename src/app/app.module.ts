import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductListComponent} from './product-list-component'
import {ProductDetailComponent} from './product-detail-component';
//import {APP_CONFIG} from '@angular/core'
import {ProductService} from './product.service';


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
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
