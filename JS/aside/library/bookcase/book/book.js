"use strict";

export default class Book {
  constructor(generator, data) {
    const book = new generator(data[12], data[11].name);
  }
}
