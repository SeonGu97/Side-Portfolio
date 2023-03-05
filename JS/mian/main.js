"use strict";

import Container from "./container/container.js";

export default class Main {
  constructor(generator, data, parent, _class, index) {
    const main = new generator(data[16], parent);

    const container = new Container(
      generator,
      data,
      data[16].array,
      _class,
      index
    );
  }
}
