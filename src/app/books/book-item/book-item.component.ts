import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { IBook } from '../../models/book'
import { BooksService } from '../books.service'
import { CartService } from '../../cart/cart.service'

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
})
export class BookItemComponent implements OnInit {
  @Input() book: IBook = {} as IBook
  isInCart = false

  constructor(private cartService: CartService) {}

  addInCart() {
    this.isInCart = true
    this.cartService.add(this.book)
  }

  removeFromCart() {
    this.isInCart = false
    this.cartService.remove(this.book)
  }

  ngOnInit(): void {}
}
