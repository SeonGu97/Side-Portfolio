"use strict";

import Bookcase from "./bookcase/bookcase.js";

export default class Library {
  constructor(generator, data, _class) {
    const library = new generator(data[10], data[1].name);

    const bookcase = new Bookcase(generator, data);

    data[10].name.addEventListener("mouseenter", (e) => {
      const target = e.target;

      _class.add(target, "show");
      _class.add(target, "library-shadow");
    });

    data[10].name.addEventListener("mouseleave", (e) => {
      const target = e.target;

      _class.remove(target, "show");
      _class.remove(target, "library-shadow");
    });
  }
}
