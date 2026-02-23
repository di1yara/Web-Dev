import { Component, input } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  // Получаем данные о продукте
  product = input.required<Product>();

  shareToWhatsApp() {
    // 1. Формируем текст сообщения
    const message = `Check out this product: ${this.product().link}`;
    
    // 2. Кодируем текст (URL-encode), как того требует документация
    const encodedMessage = encodeURIComponent(message);
    
    // 3. Используем формат ссылки БЕЗ номера телефона, 
    // чтобы WhatsApp предложил выбрать контакт из списка
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    
    // 4. Открываем ссылку в новой вкладке
    window.open(whatsappUrl, '_blank');
  }
}