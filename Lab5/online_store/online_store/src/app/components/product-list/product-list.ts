import { Component } from '@angular/core';
import { Product, Category } from '../../product';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Tablets' },
    { id: 3, name: 'Laptops' },
    { id: 4, name: 'Other' },

  ];

  currentCategoryId: number = 1;

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: 699999,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/pf2/64169612.png?format=gallery-large',
      description: "'Самый мощный iPhone в линейке с огромным и ярким дисплеем. Титановый корпус обеспечивает невероятную прочность при малом весе устройства",
      rating: 5,
      link: 'https://kaspi.kz/',
      categoryId: 1,
      likes: 0
    },
    {
      id: 2,
      name: 'Samsung S23',
      price: 494995,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-large',
      description: 'Samsung phone',
      rating: 4.7,
      link: 'https://kaspi.kz/',
      categoryId: 1,
      likes: 0
    },
    {
      id: 3,
      name: 'Смартфон Apple iPhone 17 Pro Max',
      price: 914566,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=preview-large',
      description: "Самый мощный iPhone в линейке с огромным и ярким дисплеем. Титановый корпус обеспечивает невероятную прочность при малом весе устройства",
      rating: 3.7,
      link: 'https://kaspi.kz/',
      categoryId: 1,
      likes: 0
    },
    {
      id: 4,
      name: 'Смартфон Apple iPhone 17 256Gb',
      price: 594100,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pb8/p3b/64165135.png?format=gallery-large',
      description: 'Современный смартфон с продвинутой системой камер для идеальных снимков. Мощный процессор обеспечивает плавную работу в любых приложениях.',
      rating: 4.9,
      link: 'https://kaspi.kz/',
      categoryId: 1,
      likes: 0
    },
    {
      id: 5,
      name: 'Смартфон Samsung Galaxy Z Flip7',
      price: 482500,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pcd/p19/53124317.png?format=gallery-medium',
      description: "Инновационный складной смартфон, который легко помещается в любой карман. Стильный дизайн подчеркивает индивидуальность владельца",
      rating: 3.8,
      link: 'https://kaspi.kz/',
      categoryId: 1,
      likes: 0
    },
    {
      id: 6,
      name: 'Apple iPad Air 11',
      price: 411650,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p31/37020582.png?format=gallery-medium',
      description: 'Мощный и портативный планшет, созданный для работы, творчества и развлечений. Поддерживает работу с Apple Pencil для рисования.',
      rating: 4.9,
      link: 'https://kaspi.kz/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 7,
      name: 'Планшет Huawei MatePad SE AGS6-W09',
      price: 84720,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=preview-large',
      description: 'Универсальный планшет с ярким матовым экраном и мощным процессором',
      rating: 4.8,
      link: 'https://kaspi.kz/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 8,
      name: 'Планшет Huawei MatePad 11.5 2025',
      price: 249000,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p7f/p08/65766347.png?format=gallery-medium',
      description: 'Универсальный планшет с ярким матовым экраном и мощным процессором',
      rating: 4.7,
      link: 'https://kaspi.kz/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 9,
      name: 'Планшет Samsung Galaxy Tab A9',
      price: 129860,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf9/hdc/84176279076894.jpg?format=gallery-medium',
      description: 'Универсальный планшет с ярким матовым экраном и мощным процессором',
      rating: 4.7,
      link: 'https://kaspi.kz/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 10,
      name: 'Планшет Apple iPad A16 11 2025',
      price: 201548,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=preview-large',
      description: 'Ваш идеальный спутник для работы и развлечений! Этот планшет с мощным процессором Apple A16 ',
      rating: 4.7,
      link: 'https://kaspi.kz/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 11,
      name: 'Ноутбук HP Laptop 15',
      price: 189120,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-large',
      description: 'Надежный ноутбук для учебы и офисной работы с ярким экраном. Оснащен быстрым SSD накопителем для мгновенного запуска приложений.',
      rating: 5,
      link: 'https://kaspi.kz/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 12,
      name: 'Ноутбук Apple MacBook Air 13 2020',
      price: 494995,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large',
      description: 'Классический ноутбук на базе чипа M1 для бесшумной и быстрой работы. Обеспечивает плавную работу приложений и долгую жизнь от одного заряда.',
      rating: 4.4,
      link: 'https://kaspi.kz/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 13,
      name: 'Ноутбук ThundeRobot 911S Core D 15.6"',
      price: 479000,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=preview-large',
      description: 'Надежный ноутбук для учебы и офисной работы с ярким экраном. Оснащен быстрым SSD накопителем для мгновенного запуска приложений.',
      rating: 4.7,
      link: 'https://kaspi.kz/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 14,
      name: 'Ноутбук HUAWEI MateBook D16',
      price: 384000,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hb7/84935102955550.png?format=preview-large',
      description: 'Ноутбук HUAWEI MateBook D16 оборудован шестиядерным процессором Intel Core i5-12450H с предельной тактовой частотой 4,4 ГГц. ',
      rating: 4.5,
      link: 'https://kaspi.kz/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 15,
      name: 'Ноутбук ASUS TUF Gaming FA507NUR-LP127E 15.6',
      price: 824560,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p44/pe1/49606145.jpg?format=preview-large',
      description: ' Это мощный и надёжный ноутбук, созданный для работы, учебы и захватывающих игр. ',
      rating: 5,
      link: 'https://kaspi.kz/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 16,
      name: 'Dyson Airwrap id HS08',
      price: 245000,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p32/pa2/65259706.jpg?format=gallery-large',
      description: 'Интеллектуальный стайлер для бережной укладки волос без перегрева. В комплекте идут насадки для создания идеальных локонов.',
      rating: 5,
      link: 'https://kaspi.kz/',
      categoryId: 4,
      likes: 0
    },{
      id: 17,
      name: 'Canon PowerShot G7 X Mark III',
      price: 639871,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/he0/h0b/63813275058206.jpg?format=gallery-large',
      description: 'Компактный цифровой фотоаппарат с возможностями профессиональной камеры. Поддерживает съемку видео в формате 4K и прямые трансляции.',
      rating: 4.3,
      link: 'https://kaspi.kz/',
      categoryId: 4,
      likes: 0
    },
    {
      id: 18,
      name: 'Кварцевые Gevril 12133B нержавеющая сталь',
      price: 219530,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h22/h90/85012036943902.jpg?format=gallery-medium',
      description: 'Корпус из нержавеющей стали цвета желтого золота с двухцветным браслетом из нержавеющей стали (серебряного и желтого золота)',
      rating: 4.9,
      link: 'https://kaspi.kz/',
      categoryId: 4,
      likes: 0
    },
    {
      id: 19,
      name: 'Браслет PANDORA «Сердце» ',
      price: 34120,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h3e/87126523871262.jpg?format=gallery-large',
      description: 'Разбудите романтику с этим очаровательным серебряным браслетом от Pandora с застёжкой в форме сердца.',
      rating: 4.2,
      link: 'https://kaspi.kz/',
      categoryId: 4,
      likes: 0
    },
    {
      id: 20,
      name: 'GIVENCHY Irresistible парфюмерная вода',
      price: 60050,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/h60/64153893470238.jpg?format=gallery-medium',
      description: 'Эссенция розы, собранная с первыми лучами солнца в горах Испарта в Турции, создает гармоничный контраст со светлым деревом',
      rating: 4.8,
      link: 'https://kaspi.kz/',
      categoryId: 4,
      likes: 0
    },
  ];

  get filteredProducts(): Product[] {
    return this.products.filter(
      p => p.categoryId === this.currentCategoryId
    );
  }

  likeProduct(product: Product) {
    product.likes++;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  changeCategory(id: number) {
    this.currentCategoryId = id;
  }
}