import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { IBook } from '../book';
import { BookData } from './mock-data';

@Component({
  selector: 'app-book-list-example',
  templateUrl: './book-list-example.component.html',
  styleUrls: ['./book-list-example.component.scss']
})
export class BookListExampleComponent implements OnInit {

  books: IBook[];
  selectedBooks: IBook[];
  count: number = 0;
  listaBook: IBook[];
  constructor() { }

  ngOnInit(): void {
    this.books = this.fetchBook();
    this.selectedBooks = [];
    this.listaBook = this.fetchBook();
  }

  fetchBook(): IBook[] {
    return BookData;
  }

  selectBook(book: IBook): void {
    this.selectedBooks.push(book);
    for(let lista in this.books){
      if(this.books[lista] === book){       
       this.books[lista].cantidad = this.books[lista].cantidad + 1;       
      }
    }

  }

}
