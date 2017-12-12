import {Component} from '@angular/core';
import {Input} from '@angular/core';
import {Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {ProductListComponent} from './product-list-component';
import {Product} from './product';

@Component(
    {
        selector: 'product-detail',
        template: `
                    <div id='main'>
                        <h1> Product Detail </h1>
                    
                        <input type="text" id="txtbProdDet"
                        value="{{product.name}}" (input)="product.name=$event.target.value" >

                        
                        <!--
                        <span *ngIf="product">
                                {{product.description}}
                        </span>
                        -->
                        <br />
                        <button (click)="requestDelete()">Delete</button>
                        <button>Save</button>
                    </div>
                    `,
        styles:[`#txtbProdDet{margin: 15px; width: 350px;} 
                 #main{border: 1px solid black; margin: 15px}`]
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