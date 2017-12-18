import{Product} from '../classfiles/product'
import{Component, Input} from '@angular/core'

@Component(
    {
        selector: 'shopping-cart',
        template: `
                    <div id="main">
                    <h1> Shopping Cart </h1>  
                    
                        <input type="text" id="txtProduct" (click) = "selectedProduct=product" 
                        value="{{product?.name}}" (saveProduct)= "save($event)">
                    </div>
                  `,
        styles: [`#main{border: 1px solid black; margin: 5px;}`]

    }
)

export class ShoppingCartComponent
{
    cart: Array<Product>;

    @Input()
    product: Product;

    save(product: Product)
    {
        //products.remove();
        this.cart.push(product);
        console.log("Cart: "+this.cart);
    }

   
}