"use strict";

import Palette from "./palette/palette.js";
import Title from "./title/title.js";
import Sentence from "./sentence/sentence.js";

export default class Color_System {
  constructor(generator, data, parent, _class) {
    const color_system = new generator(data[24], parent);

    const title = new Title(generator, data, data[24].array);
    const sentence = new Sentence(generator, data, data[24].array);
    const palette = new Palette(generator, data, data[24].array);
  }
}
