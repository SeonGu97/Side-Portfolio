'use strict';

import Nav from "./nav/nav.js";
import Mode from "./mode/mode.js";
import Library from "./library/library.js";

export default class Aside {
    constructor(generator, data) {
        const aside = new generator(data[1], data[0].name);

        const nav = new Nav(generator, data);
        const library = new Library(generator, data);
        const mode = new Mode(generator, data);
    }
}