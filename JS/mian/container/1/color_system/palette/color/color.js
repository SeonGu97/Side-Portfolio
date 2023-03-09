"use strict";

export default class Color {
  constructor(generator, data, parent) {
    const color = new generator(data[27], parent);
  }
}
