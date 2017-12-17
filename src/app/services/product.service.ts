import {Product} from '../classfiles/product';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
//const Rx = require('rxjs');


@Injectable()
export class ProductService
{
    //products: Product;
    products: Array<Product> = [
                                        new Product(1, "iPhone 3", 100, "Apple product iPhone 3 year 2006"),
                                        new Product(2, "iPhone 4", 200, "Apple product iPhone 4 year 2008"),
                                        new Product(3, "iPhone 5", 300, "Apple product iPhone 5 year 2010"),
                                        new Product(4, "iPhone 5s", 400, "Apple product iPhone 5s year 2011"),
                                        new Product(5, "iPhone 5c", 400, "Apple product iPhone 5c year 2011")
                                    ];


    getAllProduct(): Observable<Product[]>
    {
        //let productObservable = Observable.from(this.products)
        //return this.products;
        return Observable.of(this.products);
        //return Observable.from(this.products);
    }


    getProductById(productId: number)
        {
            //products.remove();
            for(let i: number = 0; i < this.products.length; i++)
            {
                if(this.products[i].id == productId)
                {
                    //delete this.products[i];
                    return this.products[i];
                }
            }
        }



}