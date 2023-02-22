"use strict";

import Nav from "./nav/nav.js";

export default class Aside {
  constructor(generator, data, parent, _class, storage_data, storage_creater) {
    const aside = new generator(data[1], parent);

    const nav = new Nav(
      generator,
      data,
      data[1].array,
      _class,
      storage_data,
      storage_creater
    );
  }
}
