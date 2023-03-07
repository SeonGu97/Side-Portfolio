"use strict";

import Scroll_Ball from "./scroll_ball/scroll_ball.js";

export default class Scroll_Icon {
  constructor(generator, data, parent, _class) {
    const scroll_icon = new generator(data[22], parent);

    const scroll_ball = new Scroll_Ball(generator, data, data[22].name, _class);
  }
}
