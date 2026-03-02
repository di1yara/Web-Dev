import { Component } from '@angular/core';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList],
  template: `
    <h1>Магазин Kaspi</h1>
    <app-product-list></app-product-list>
  `,
})
export class App {}