import {Component} from '@angular/core';
import {Input} from '@angular/core';
import {Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {ProductListComponent} from './product-list-component';
import {Product} from './service-product';

@Component(
    {
        selector: 'product-detail',
        template: `<h1> Product Detail </h1>
                   
                    <input type="text" id="txtbProdDet"
                     value="{{product.name}}" 
                     (input)="product.name=$event.target.value"
                      >

                     
                   <!--
                   <span *ngIf="product">
                        {{product.description}}
                   </span>
                   -->
                   <button (click)="requestDelete()">Delete</button>
                    `,
        styles:['#txtbProdDet{margin: 15px; width: 350px;}']
    }
)
export class ProductDetailComponent
{
    //mess: ProductListComponent;

    @Input()
    product: Product;

    //create an Event
    @Output()
    deleteProduct= new EventEmitter<Product>();

    requestDelete()
    {
        this.deleteProduct.emit(this.product);
    }
    
}