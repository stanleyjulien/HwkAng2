import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1> {{title}} </h1>
      <product-list></product-list> 
    </div>  
  `,
  styles: ['div{border:1px solid red;text-align:center;}',
            'hi{color:white}','div product-list{width:300px;align:left}']
})
export class AppComponent {
  title = 'Welcome to App Store';
}
