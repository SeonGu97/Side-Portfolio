"use strict";

import Main_Img from "./1/main_img.js";
import Color_System from "./1/color_system/color_system.js";

export default class Container {
  constructor(generator, data, parent, _class, index) {
    this.index = index;

    const container = new generator(data[17], parent);

    data[17].array.forEach((element, index) => {
      if (index !== this.index) element.remove();
    });

    const main_img = new Main_Img(generator, data, data[17].array[0], _class);
    const color_system = new Color_System(
      generator,
      data,
      data[17].array[0],
      _class
    );
  }
}
