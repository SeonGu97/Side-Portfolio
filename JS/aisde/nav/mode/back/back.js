"use strict";

export default class Back {
  constructor(generator, data, parent) {
    const back = new generator(data[8], parent);
  }
}
