"use strict";

import Generator from "./setting/generator.js";
const generator = Generator;

import { Data } from "./setting/data.js";
const data = Data;

import Aside from "./aside/aside.js";
import Main from "./main/main.js";

export default class Index {
  constructor(generator, data) {
    const index = new generator(data[0], document.body);

    const aside = new Aside(generator, data);
    const main = new Main(generator, data);
  }
}

const index = new Index(generator, data);
