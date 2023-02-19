"use strict";

import _Class from "../setting/class.js";
import StorageData from "../setting/storage-data.js";

import Container from "./container/container.js";

export default class Main {
  constructor(generator, data) {
    const main = new generator(data[13], data[0].name);

    const container = new Container(generator, data);

    const _class = _Class;
    const storage_data = StorageData;

    const _index = JSON.parse(localStorage.getItem(storage_data[1].name))[0];

    this.maintains(data, _class, _index);
  }

  maintains(data, _class, _index) {
    if (_index === 3) _class.add(data[13].name, "main-move");
  }
}
