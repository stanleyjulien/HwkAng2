import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="headerapp">
      <h1> Welcome to {{title}} </h1>
    </div>
    
  `,
  styles: ['#headerapp {text-align: center;}']
})

class Product
{
  id: number;
  name: string;
  price: number;
  description: string;

  
}

export class AppComponent {
  title = 'App Store!';
}
