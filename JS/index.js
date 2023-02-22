"use strict";

import Generator from "./setting/generator.js";
const generator = Generator;

import { Data } from "./setting/data.js";
const data = Data;

import _Class from "./setting/class/_class.js";

import Storage_Creater from "./setting/storage/storage-creater.js";
import Storage_Data from "./setting/storage/storage-data.js";

import Aside from "./aisde/aside.js";

export default class Index {
  constructor(generator, data) {
    const index = new generator(data[0], document.body);

    const _class = _Class;

    const storage_data = Storage_Data;
    const storage_creater = Storage_Creater;

    const Index = storage_creater(
      storage_data[0].name,
      storage_data[0].value,
      0
    );

    const aside1 = new Aside(
      generator,
      data,
      data[0].array,
      _class,
      storage_data,
      storage_creater
    );
    const aside2 = new Aside(
      generator,
      data,
      data[0].array,
      _class,
      storage_data,
      storage_creater
    );
  }
}

const index = new Index(generator, data);
