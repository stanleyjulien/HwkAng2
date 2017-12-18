import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1> {{title}} </h1>
      <product-list></product-list> 
    </div>  
  `,

  styles: [`div{border:1px solid red;text-align:center;},
            hi{color:white},div product-list{width:300px;align:left} 
            #welcomdiv {border: 1px solid red; width: 700px; margin: auto;} 
            #welcomh1{text-align: center;} 
            #productp {test-aling: left; border: 1px solid green; margin: 5px;}`
   ]

})
export class AppComponent {
  title = 'Welcome to App Store';
}
