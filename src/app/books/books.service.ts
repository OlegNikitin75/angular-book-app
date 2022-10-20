import { Injectable } from '@angular/core'

@Injectable()
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        id: 1,
        name: 'Чистый код',
        author: 'Роберт Мартин',
        price: 750,
        imgUrl:
          'https://chitatel.by/storage/thumbs/2c/h501_w315_2cc2162477bfba869898823f92fa8a2b.jpg'
      },
      {
        id: 2,
        name: 'JavaScript. Подробное руководство',
        author: 'Дэвид Флэнаган',
        price: 1200,
        imgUrl:
          'https://highload.today/wp-content/uploads/2021/06/1-7-500x708.jpg'
      },
      {
        id: 3,
        name: 'React и Redux: функциональная веб-разработка',
        author: 'Алекс Бэнкс, Ева Порселло',
        price: 1050,
        imgUrl:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528088374i/40379042.jpg'
      },
      {
        id: 4,
        name: 'HTML и CSS. Разработка и дизайн веб-сайтов',
        author: 'Джон Дакетт',
        price: 1500,
        imgUrl:
          'https://progerlib.ru/wp-content/uploads/2020/06/html-i-css-razrabotka-i-dizayn-veb-saytov.png'
      },
      {
        id: 5,
        name: 'Angular и TypeScript. Сайтостроение для профессионалов',
        author: 'Файн Яков, Моисеев Антон',
        price: 1150,
        imgUrl:
          'https://img3.labirint.ru/rc/5474d919cc1396918a9b27da8e850f10/363x561q80/books63/627669/cover.jpg?1564072422'
      },
      {
        id: 6,
        name: 'Angular. Сборник рецептов',
        author: 'Мэтт Фрисби',
        price: 950,
        imgUrl:
          'https://monster-book.com/sites/default/files/styles/sc290x400/public/books/angular.-sbornik-receptov.png?itok=LwgA9YQE'
      }
    ]
  }
}
