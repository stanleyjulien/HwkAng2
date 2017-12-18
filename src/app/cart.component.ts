import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from './CartItem';
import { CartService } from './CartService';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Product } from './Product';

@Component({
  selector: 'cart',
  template: `
    <div>
      <h3>
        {{title}}
      </h3>
      <br>
     <table>
        <tr>
          <td>Product</td>
          <td>Quantaity</td>
          <td>Amount</td>
        </tr>
        <tr *ngFor='let item of cartItems | async'>
          <td>{{item.name}}</td>
          <td>{{item.quantity}}</td>
          <td>{{item.quantity | cartpipe:item.amount | currency:'USD'}}</td>
        </tr>
      </table>
      <h3>
        Total Amount: {{getTotal() | currency:'USD'}}
      </h3>
      <br>
      <input type='button' value='Delete product' style="margin:10px" (click)="remove()">
  </div>    
  `,
  styles: ['div{border:1px solid black;text-align:center;margin:20px}'
            , 'table{text-align:center;margin:auto;display: inline-block;}']
})
export class CartComponent implements OnInit {
  title = 'Your shopping cart';
  cartItems;

  @Output()
  removeItem = new EventEmitter<CartItem>();

  @Input()
  addToCart;

  @Input()
  cartItem: CartItem;

  totalAmount: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartIems();
    this.totalAmount = this.cartService.getAmount();
  }

  delete() {
    this.removeItem.emit(this.cartItem);
  }

  remove() {
    this.removeItem.emit();
  }

  addItemToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  getTotal() {
    return this.cartService.getAmount();
  }
}