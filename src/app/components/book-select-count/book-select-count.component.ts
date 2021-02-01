import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../book';

@Component({
  selector: 'app-book-select-count',
  templateUrl: './book-select-count.component.html',
  styleUrls: ['./book-select-count.component.scss']
})
export class BookSelectCountComponent implements OnInit {

  @Input() totalBooks: number;
  @Input() cantidaSeleccionados: IBook;
  constructor() { }

  ngOnInit(): void {
    this.totalBooks = 0;
  }

}
