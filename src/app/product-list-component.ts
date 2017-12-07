import {Component} from '@angular/core';
import {AppComponent} from './app.component';
//import {Product} from './app.component';
import {Product} from './service-product';

@Component(
    {
        selector: 'product-list',
        template: `
        
                    <ul>
                        <li *ngFor="let product of products"> {{product.name}} </li>
                    </ul>
                    <!-- My products: {{products}} -->
                    
                    <!-- My products: {{products[0].name}} -->
                    `,
        styles: []
    }
)

export class ProductListComponent
{
        products: Array<Product> = [
        new Product(1, "iPhone 3", 100, "Apple product"),
        new Product(2, "iPhone 4", 200, "Apple product"),
        new Product(3, "iPhone 5", 300, "Apple product"),
        new Product(1, "iPhone 5s", 400, "Apple product")
    ];
}

