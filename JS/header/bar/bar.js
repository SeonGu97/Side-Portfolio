"use strict";

export default class Bar {
  constructor(generator, data, parent, _class) {
    const bar = new generator(data[11], parent);

    const icon = [
      '<i class="bi bi-text-indent-right"></i>',
      '<i class="bi bi-list"></i>',
    ];

    data[11].name.addEventListener("click", (e) => {
      const target = e.currentTarget;

      _class.toggle(data[1].array[1], "show");

      if (_class.contains(data[1].array[1], "show")) {
        target.innerHTML = icon[0];
      } else {
        target.innerHTML = icon[1];
      }

      _class.toggle(data[13].name, "show");
    });
  }
}
