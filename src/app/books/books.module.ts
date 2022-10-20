import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BooksService } from './books.service'
import { BooksComponent } from './books.component'
import { BookItemComponent } from './book-item/book-item.component'

@NgModule({
  declarations: [BooksComponent, BookItemComponent],
  providers: [BooksService],
  imports: [CommonModule],
  exports: [BooksComponent]
})
export class BooksModule {}
