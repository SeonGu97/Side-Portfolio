'use strict';

import Nav from "./nav/nav.js";

export default class Aside {
    constructor(generator, data) {
        const aside = new generator(data[1], data[0].name);
        
        const nav = new Nav(generator, data);
    }
}