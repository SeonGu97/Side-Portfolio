'use strict';

import Menu from "./menu/menu.js";
import Mode from "./mode/mode.js";

export default class Nav {
    constructor(generator, data) {
        const nav = new generator(data[2], data[1].name);

        const menu = new Menu(generator, data);
        const mode = new Mode(generator, data);
    }
}