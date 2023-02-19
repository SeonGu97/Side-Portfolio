"use strict";

import Book from "./book/book.js";

export default class Bookcase {
  constructor(generator, data) {
    const bookcase = new generator(data[11], data[10].name);

    const book = new Book(generator, data);
  }
}
