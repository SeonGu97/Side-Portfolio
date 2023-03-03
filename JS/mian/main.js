"use strict";

import Container from "./container/container.js";

export default class Main {
  constructor(generator, data, parent, _class) {
    const main = new generator(data[16], parent);

    const container = new Container(generator, data, data[16].name, _class);
  }
}
