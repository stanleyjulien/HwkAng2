import {Component, OnInit, Pipe} from '@angular/core';
import {AppComponent} from './app.component';
//import {Product} from './app.component';

import {Product} from './product';
import {ProductService} from './product.service';

@Component(
    {
        selector: 'product-list',
        template: `
                    <h1> Product List </h1>
                    <ul>
                        
                        <li *ngFor="let product of products | async" (click)="selectedProduct=product"> 
                            {{product.name}} \${{product.price}} {{product.description}}
                        </li>
                        


                    </ul>
                   
                    <product-detail [product]="selectedProduct" (deleteProduct)= "delete($event)" ></product-detail> 
                    
                    `,
        styles: []
    }
)

export class ProductListComponent implements OnInit
{
    //productService: ProductService = new ProductService();
    //products: Array<Product> = this.productService.getAllProduct();
    products;
    /*productObservable = this.productService.getAllProduct().subscribe(
                                                   //prod => console.log(prod)
                                                   prod => this.products = prod     
                                    );*/
    constructor(private productService: ProductService){}

    ngOnInit()
    {
        this.listProd();
    }

    listProd(): void
    {
        /*this.productService.getAllProduct().subscribe(
                                                   //prod => console.log(prod)
                                                   prod => this.products = prod    
                                    );*/
          this.products = this.productService.getAllProduct();
    }
    
        /*products: Array<Product> = [
                                        new Product(1, "iPhone 3", 100, "Apple product iPhone 3 year 2006"),
                                        new Product(2, "iPhone 4", 200, "Apple product iPhone 4 year 2008"),
                                        new Product(3, "iPhone 5", 300, "Apple product iPhone 5 year 2010"),
                                        new Product(4, "iPhone 5s", 400, "Apple product iPhone 5s year 2011"),
                                        new Product(5, "iPhone 5c", 400, "Apple product iPhone 5c year 2011")
                                    ];
                                    */
                                    

    message = '';
    selectedProduct: Product;

    myClick()
        {
            this.message = 'Clicked';
        }

    delete(product: Product)
    {
        //products.remove();
        for(let i: number = 0; i < this.products.length; i++)
        {
            if(this.products[i].id == product.id)
            {
                //delete this.products[i];
                this.products.splice(i, 1);
            }
        }
    }
    
}

