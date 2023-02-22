"use strict";

import Menu from "./menu/menu.js";
import Mode from "./mode/mode.js";

export default class Nav {
  constructor(generator, data, parent, _class, storage_data, storage_creater) {
    const nav = new generator(data[2], parent);

    const menu = new Menu(
      generator,
      data,
      data[2].name,
      _class,
      storage_data,
      storage_creater
    );
    const mode = new Mode(generator, data, data[2].name);
  }
}
