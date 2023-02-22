"use strict";

import Front from "./front/front.js";
import Back from "./back/back.js";

export default class Mode {
  constructor(generator, data, parent) {
    const mode = new generator(data[4], parent);

    const front = new Front(generator, data, data[4].name);
    const back = new Back(generator, data, data[4].name);
  }
}
