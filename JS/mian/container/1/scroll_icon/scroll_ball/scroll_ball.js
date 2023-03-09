"use strict";

export default class Scroll_Ball {
  constructor(generator, data, parent, _class) {
    const scroll_ball = new generator(data[23], parent);

    setInterval(() => {
      _class.add(data[23].name, "down");
    }, 2500);

    data[23].name.addEventListener("transitionend", (e) => {
      _class.remove(data[23].name, "down");
    });
  }
}
