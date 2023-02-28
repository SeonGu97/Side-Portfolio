"use strict";

import Bar from "./bar/bar.js";
import Logo from "./logo/logo.js";

export default class Header {
  constructor(generator, data, parent) {
    const header = new generator(data[10], parent);

    const bar = new Bar(generator, data, data[10].name);
    const logo = new Logo(generator, data, data[10].name);
  }
}
