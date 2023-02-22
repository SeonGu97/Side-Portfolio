"use strict";

import Item from "./item/item.js";

export default class Menu {
  constructor(generator, data, parent, _class, storage_data, storage_creater) {
    const menu = new generator(data[3], parent);

    const item = new Item(
      generator,
      data,
      data[3].name,
      _class,
      storage_data,
      storage_creater
    );
  }
}
