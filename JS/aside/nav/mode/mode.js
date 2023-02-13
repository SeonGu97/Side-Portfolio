'use strict';

import Front from "./front/front.js";
import Back from "./back/back.js";

export default class Mode {
    constructor(generator, data) {
        const mode = new generator(data[4], data[2].name);

        const front = new Front(generator, data);
        const back = new Back(generator, data);
    }
}