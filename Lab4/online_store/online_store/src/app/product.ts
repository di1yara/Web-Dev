export interface Product {
  id: number;          // Уникальный идентификатор
  name: string;        // Название продукта
  description: string; // Короткое описание (2–3 предложения)
  price: number;       // Цена в тенге (KZT)
  rating: number;      // Рейтинг от 1 до 5 (например, 4.7)
  imageUrl: string;       // Ссылка на главное изображение
  link: string;        // Прямая ссылка на товар на kaspi.kz
}