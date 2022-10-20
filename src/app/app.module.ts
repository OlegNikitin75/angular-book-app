import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component'
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, CartComponent],
    imports: [BrowserModule, FormsModule, BooksModule, RouterOutlet,AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
