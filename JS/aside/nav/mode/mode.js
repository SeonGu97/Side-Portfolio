"use strict";

import Front from "./front/front.js";
import Back from "./back/back.js";

export default class Mode {
  constructor(generator, data, storage_data) {
    const mode = new generator(data[4], data[2].name);

    const front = new Front(generator, data);
    const back = new Back(generator, data);

    const _dark_mode = JSON.parse(localStorage.getItem(storage_data[0].name));
    const _index = JSON.parse(localStorage.getItem(storage_data[1].name));

    data[4].name.addEventListener("click", (e) => {
      const target = e.target;

      this.toggle(target, "active");
      this.toggle(data[0].name, "dark-mode");
      this.toggle(data[1].name, "dark-aside");

      data[5].array.forEach((element) => {
        this.toggle(element, "dark-list");
      });

      this.toggle(data[6].name, "f-active");
      this.toggle(data[7].name, "b-active");

      let boolean;

      if (data[4].name.classList.contains("active")) {
        boolean = true;
      } else {
        boolean = false;
      }

      _dark_mode.shift();
      _dark_mode.push(boolean);

      localStorage.setItem(storage_data[0].name, JSON.stringify(_dark_mode));
    
      if(_dark_mode[0]) {
        data[9].array.forEach((element) => {
          this.add(element, "dark-em");
        });
      }else {
        data[9].array.forEach((element) => {
          this.remove(element, "dark-em");
        });
      }
    });

    this.maintains(data, _dark_mode[0], _index[0]);
  }

  add(element, value) {
    element.classList.add(value);
  }

  remove(element, value) {
    element.classList.remove(value);
  }

  replace(element, value1, value2) {
    element.classList.replace(value1, value2);
  }

  toggle(element, value) {
    element.classList.toggle(value);
  }

  maintains(data, _dark_mode, _index) {
    if (_dark_mode) {
      this.add(data[0].name, "dark-mode");
      this.add(data[1].name, "dark-aside");
      this.add(data[4].name, "active");

      data[5].array.forEach((element) => {
        this.add(element, "dark-list");
      });

      this.add(data[6].name, "f-active");
      this.add(data[7].name, "b-active");
      this.add(data[9].array[_index], "dark-em");

      data[9].array.forEach((element) => {
        this.add(element, "dark-em");
      });
    } else {
      data[9].array.forEach((element) => {
        this.remove(element, "dark-em");
      });
    }
  }
}
