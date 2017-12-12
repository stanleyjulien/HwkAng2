import { Component } from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './product';

@Component({
  selector: 'app-root',
  //providers: [ProductService],
  template: `
    <div id="welcomdiv">
      <h1 id="welcomh1"> Welcome to {{title}} </h1> 
      <p id="productp"> 
        <product-list></product-list> 
      </p>
    </div>
    
    
  `,
  styles: [`#welcomdiv {border: 1px solid red; width: 500px; margin: auto;} 
            #welcomh1{text-align: center;} 
            #productp {test-aling: left; border: 1px solid green; margin: 5px;}`
   ]
})
export class AppComponent {
  title = 'App Store!';
  products: Array<Product>;

  constructor(productService: ProductService)
  {
    //this.products = productService.getAllProduct();
    
  }
}


