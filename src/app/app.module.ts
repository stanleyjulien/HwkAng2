import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductListComponent} from './componentfiles/product-list-component'
import {ProductDetailComponent} from './componentfiles/product-detail-component';
import{ShoppingCartComponent} from './componentfiles/shopping.cart.component'
//import {APP_CONFIG} from '@angular/core'
import {ProductService} from './services/product.service';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
