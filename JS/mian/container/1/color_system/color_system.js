"use strict";

import Title from "./title/title.js";

export default class Color_System {
  constructor(generator, data, parent, _class) {
    const color_system = new generator(data[24], parent);

    const title = new Title(generator, data, data[24].array);
  }
}
