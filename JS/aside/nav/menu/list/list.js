"use strict";

import Item from "./item/item.js";
import Em from "./em/em.js";

export default class List {
  constructor(generator, data, storage_data, _class) {
    const list = new generator(data[5], data[3].name);

    const item = new Item(generator, data);
    const em = new Em(generator, data);

    const _index = JSON.parse(localStorage.getItem(storage_data[1].name));
    const _dark_mode = JSON.parse(localStorage.getItem(storage_data[0].name));

    data[5].array.forEach((element, index, array) => {
      element.addEventListener("mouseenter", (e) => {
        const target = e.target;

        const target_index = array.indexOf(target);

        if (target_index == 3) _class.add(data[10].name, "show");
      });

      element.addEventListener("mouseleave", (e) => {
        const target = e.target;

        _class.remove(data[10].name, "show");
      });

      element.addEventListener("click", (e) => {
        const target = e.target;

        const target_index = array.indexOf(target);

        _class.remove_all(data[5].array, "paint");
        _class.add(target, "paint");

        _index.shift();
        _index.push(target_index);

        _class.remove_all(data[9].array, "show-em");
        _class.add(data[9].array[target_index], "show-em");

        if (target_index == 3) {
          _class.add(data[13].name, "main-move");
        } else {
          _class.remove(data[13].name, "main-move");
        }

        localStorage.setItem(storage_data[1].name, JSON.stringify(_index));
      });
    });
    this.maintains(data, _index[0], _dark_mode[0], _class);
  }

  maintains(data, _index, _dark_mode, _class) {
    _class.add(data[9].array[_index], "show-em");
    _class.add(data[5].array[_index], "paint");
  }
}
