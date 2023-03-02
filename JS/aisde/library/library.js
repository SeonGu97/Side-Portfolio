"use strict";

export default class Library {
  constructor(generator, data, parent, _class) {
    const library = new generator(data[14], parent);

    data[14].name.addEventListener("mouseenter", (e) => {
      const target = e.currentTarget;

      _class.add(target, "show");
    });

    data[14].name.addEventListener("mouseleave", (e) => {
      const target = e.currentTarget;

      _class.remove(target, "show");
    });
  }
}
