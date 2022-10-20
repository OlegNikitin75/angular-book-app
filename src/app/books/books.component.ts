import { Component, OnDestroy, OnInit } from '@angular/core'
import { IBook } from '../models/book'
import { BooksService } from './books.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
  books: IBook[] = []

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books = this.booksService.getBooks()
  }
}
