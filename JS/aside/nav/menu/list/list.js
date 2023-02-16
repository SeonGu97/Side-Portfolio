"use strict";

import Item from "./item/item.js";
import Em from "./em/em.js";

export default class List {
  constructor(generator, data, storage_data) {
    const list = new generator(data[5], data[3].name);

    const item = new Item(generator, data);
    const em = new Em(generator, data);

    const _index = JSON.parse(localStorage.getItem(storage_data[1].name));
    const _dark_mode = JSON.parse(localStorage.getItem(storage_data[0].name));

    data[5].array.forEach((element, index, array) => {
      element.addEventListener("mouseenter", (e) => {
        const target = e.target;

        target.classList.add("hovered");
      });

      element.addEventListener("mouseleave", (e) => {
        const target = e.target;

        target.classList.remove("hovered");
      });

      element.addEventListener("click", (e) => {
        const target = e.target;
        
        const target_index = array.indexOf(target);

        _index.shift();
        _index.push(target_index);

        data[9].array.forEach((element) => {
          this.remove(element, "show-em");
        });
        this.add(data[9].array[target_index], "show-em");

        localStorage.setItem(storage_data[1].name, JSON.stringify(_index));
      });
    });

    this.maintains(data, _index[0], _dark_mode[0]);
  }

  add(data, value) {
    data.classList.add(value);
  }

  remove(data, value) {
    data.classList.remove(value);
  }

  maintains(data, _index, _dark_mode) {
    this.add(data[9].array[_index], "show-em");
  }
}
