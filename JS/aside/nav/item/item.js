'use strict';

import Icon from "./icon/icon.js";

export default class Item {
    constructor(generator, data) {
        const item = new generator(data[3], data[2].name);

        const icon = new Icon(generator, data);
    }
}