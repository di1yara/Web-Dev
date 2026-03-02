import { Component, input, output } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  product = input.required<Product>();

  like = output<Product>();
  delete = output<number>();

  likeProduct() {
    this.like.emit(this.product());
  }

  deleteProduct() {
    this.delete.emit(this.product().id);
  }

  shareToWhatsApp() {
    const message = `Check out this product: ${this.product().link}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  }
}