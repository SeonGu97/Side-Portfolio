"use strict";

import Menu from "./menu/menu.js";
import Mode from "./mode/mode.js";

import StorageData from "../../setting/storage-data.js";
import StorageCreater from "../../setting/storage-creater.js";

export default class Nav {
  constructor(generator, data) {
    const nav = new generator(data[2], data[1].name);

    const storage_data = StorageData;
    const storage_creater = StorageCreater;

    const dark_mode = storage_creater(storage_data[0].name, storage_data[0].value, storage_data[0].basic);
    const index = storage_creater(storage_data[1].name, storage_data[1].value, storage_data[1].basic);

    const menu = new Menu(generator, data, storage_data);
    const mode = new Mode(generator, data, storage_data);
  }
}
