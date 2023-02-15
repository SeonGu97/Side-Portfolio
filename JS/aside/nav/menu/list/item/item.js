'use strict';

export default class Item {
    constructor(generator, data) {
        const item = new generator(data[8], data[5].array);
    }
}