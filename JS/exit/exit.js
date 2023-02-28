"use strict";

export default class Exit {
  constructor(generator, data, parent, _class) {
    const exit = new generator(data[13], parent);

    data[13].name.addEventListener("click", (e) => {
      const target = e.currentTarget;

      _class.remove(data[1].array[1], "show");
      _class.remove(target, "show");
      data[11].name.innerHTML = '<i class="bi bi-list"></i>';
    });
  }
}
