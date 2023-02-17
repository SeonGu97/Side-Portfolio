"use strict";

import Front from "./front/front.js";
import Back from "./back/back.js";

export default class Mode {
  constructor(generator, data, storage_data, _class) {
    const mode = new generator(data[4], data[2].name);

    const front = new Front(generator, data);
    const back = new Back(generator, data);

    const _dark_mode = JSON.parse(localStorage.getItem(storage_data[0].name));
    const _index = JSON.parse(localStorage.getItem(storage_data[1].name));

    data[4].name.addEventListener("click", e => {
      const target = e.target;

      _class.toggle(target, "active");
      _class.toggle(data[0].name, "dark-mode");
      _class.toggle(data[2].name, "dark-nav");
      _class.toggle_all(data[5].array, 'dark-list');
      _class.toggle(data[6].name, "f-active");
      _class.toggle(data[7].name, "b-active");
      _class.toggle(data[10].name, 'dark-library');

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
        _class.add_all(data[9].array, "dark-em");
      }else {
        _class.remove_all(data[9].array, "dark-em");
      }
    });

    this.maintains(data, _dark_mode[0], _index[0], _class);
  }

  maintains(data, _dark_mode, _index, _class) {
    if (_dark_mode) {
      _class.add(data[0].name, "dark-mode");
      _class.add(data[2].name, "dark-nav");
      _class.add(data[4].name, "active");
      _class.add_all(data[5].array, 'dark-list');
      _class.add(data[6].name, "f-active");
      _class.add(data[7].name, "b-active");
      _class.add(data[9].array[_index], "dark-em");
      _class.add_all(data[9].array, 'dark-em');
    } else {
      _class.remove_all(data[9].array, 'dark-em');
    }
  }
}
