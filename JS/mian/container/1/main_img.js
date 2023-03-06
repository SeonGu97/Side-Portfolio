"use strict";

import Main_Text from "./main_text.js/main_text.js";
import Main_Img_Cover from "./main_img_cover/main_img_cover.js";

export default class Main_Img {
  constructor(generator, data, parent) {
    const main_img = new generator(data[18], parent);

    const main_text = new Main_Text(generator, data, data[18].name);
    const main_img_cover = new Main_Img_Cover(generator, data, data[18].name);
  }
}
