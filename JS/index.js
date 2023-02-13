'use strict';

import Generator from "./generator.js";
const generator = Generator;

import { Data } from "./data.js";
const data = Data;

import Aside from "./aside/aside.js";

export default class Index {
    constructor(generator, data) {
        const index = new generator(data[0], document.body);

        const aside = new Aside(generator, data);
    }
}

const index = new Index(generator, data);