"use strict";

import Home_Img from "./1/home_img.js";

export default class Container {
  constructor(generator, data) {
    const container = new generator(data[14], data[13].name);

    const home_img = new Home_Img(generator, data);
  }
}
