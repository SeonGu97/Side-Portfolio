'use strict';

import List from "./list/list.js";

export default class Menu {
    constructor(generator, data, storage_data) {
        const menu = new generator(data[3], data[2].name);

        const list = new List(generator, data, storage_data);
    }
}