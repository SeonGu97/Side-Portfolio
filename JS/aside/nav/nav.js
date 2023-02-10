'use strict';

import Item from "./item/item.js";

export default class Nav {
    constructor(generator, data) {
        const nav = new generator(data[2], data[1].name);

        const item = new Item(generator, data);
    }
}