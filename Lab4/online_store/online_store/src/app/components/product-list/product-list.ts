import { Component } from '@angular/core';
import { Product } from '../../product';
import { ProductCard } from '../product-card/product-card';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard],
  template: `
    <div class="product-list-container">
      <div class="product-grid">
        @for (product of products; track product.id) {
          <app-product-card [product]="product"></app-product-card>
        }
      </div>
    </div>
  `,
  styles: [`
    .product-list-container {
      width: 100%;
      background-color: #f5f5f5; /* серый фон как на Kaspi */
      padding: 40px 0;
    }
    .product-grid {
      display: grid;
      /* Фиксируем ровно 5 колонок */
      grid-template-columns: repeat(5, 1fr); 
      gap: 15px;
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 20px;
    }
  `]
})
export class ProductList {
  products: Product[] = [
    {
    id: 1,
    name: 'Ноутбук HP Laptop 15',
    price: 189120,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-large',
    description: 'Надежный ноутбук для учебы и офисной работы с ярким экраном. Оснащен быстрым SSD накопителем для мгновенного запуска приложений.',
    rating: 4.5,
    link: 'https://kaspi.kz/shop/p/hp-15-fc0001ua-15-6-8-gb-ssd-256-gb-win-11-77313011/'
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 17 256Gb',
    price: 594100,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pb8/p3b/64165135.png?format=gallery-large',
    description: 'Современный смартфон с продвинутой системой камер для идеальных снимков. Мощный процессор обеспечивает плавную работу в любых приложениях. ',
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-256gb-rozovyi-124117855/'
  },
  {
    id: 3,
    name: 'Apple iPad Air 11',
    price: 401335,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p31/37020582.png?format=gallery-medium',
    description: 'Мощный и портативный планшет, созданный для работы, творчества и развлечений. Поддерживает работу с Apple Pencil для рисования.',
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-11-wi-fi-128gb-seryi-119335503/'
  },
  {
    id: 4,
    name: 'Samsung Galaxy S25 Ultra',
    price: 564000,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-large',
    description: 'Флагманский смартфон с камерой высокого разрешения и поддержкой стилуса. Идеально подходит для многозадачности и создания качественного контента.',
    rating: 4.7,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-256-gb-seryi-116043556/'
  },
  {
    id: 5,
    name: 'Apple iPhone 17 Pro Max 256Gb',
    price: 852056,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/pf2/64169612.png?format=gallery-medium',
    description: 'Самый мощный iPhone в линейке с огромным и ярким дисплеем. Титановый корпус обеспечивает невероятную прочность при малом весе устройства.',
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-124119159/'
  },
  {
    id: 6,
    name: 'Ноутбук Apple MacBook Air 13 2020',
    price: 439895,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large',
    description: 'Классический ноутбук на базе чипа M1 для бесшумной и быстрой работы. Обеспечивает плавную работу приложений и долгую жизнь от одного заряда.',
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/'
  },
  {
    id: 7,
    name: 'Samsung Galaxy Z Flip7 FE 5G',
    price: 494469,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pcd/p19/53124317.png?format=gallery-large',
    description: 'Инновационный складной смартфон, который легко помещается в любой карман. Стильный дизайн подчеркивает индивидуальность владельца.',
    rating: 4.6,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-flip6-12-gb-256-gb-goluboi-120811231/'
  },
  {
    id: 8,
    name: 'Canon PowerShot G7 X Mark III',
    price: 639871,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/he0/h0b/63813275058206.jpg?format=gallery-large',
    description: 'Компактный цифровой фотоаппарат с возможностями профессиональной камеры. Поддерживает съемку видео в формате 4K и прямые трансляции.',
    rating: 4.4,
    link: 'https://kaspi.kz/shop/p/canon-powershot-g7-x-mark-iii-chernyi-100223709/'
  },
  {
    id: 9,
    name: 'Apple iPhone 17 Pro Max 256Gb Gray',
    price: 856359,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/pf2/64169612.png?format=gallery-large',
    description: 'Премиальный смартфон в стильном сером цвете с максимальной производительностью. Оснащен инновационными датчиками для ночной съемки. ',
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-seryi-124117079/'
  },
  {
    id: 10,
    name: 'Dyson Airwrap id HS08',
    price: 245000,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p32/pa2/65259706.jpg?format=gallery-large',
    description: 'Интеллектуальный стайлер для бережной укладки волос без перегрева. В комплекте идут насадки для создания идеальных локонов. ',
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/dyson-airwrap-complete-long-hs05-sinii-mednyi-104712056/'
  },
  ];
}