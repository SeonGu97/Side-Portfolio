'use strict';

import Item from "./item/item.js";
import Em from "./em/em.js";

export default class List {
    constructor(generator, data) {
        const list = new generator(data[5], data[3].name);

        const item = new Item(generator, data);
        const em = new Em(generator, data);

        const name = 'Index';
        let value;

        if(localStorage.getItem(name) == null) {
            value = [0];
        }else {
            value = JSON.parse(localStorage.getItem(name));
        }

        const dark = JSON.parse(localStorage.getItem('Dark-Mode'))[0];

        data[5].array.forEach((element, index, array) => {
            element.addEventListener('mouseenter', e => {
                const target = e.target;

                target.classList.add('hovered');
            });

            element.addEventListener('mouseleave', e => {
                const target = e.target;

                target.classList.remove('hovered');
            });

            element.addEventListener('click', e => {
                const target = e.target;

                const index = array.indexOf(target);

                value.shift();
                value.push(index);

                data[9].array.forEach(element => {
                    this.remove(element, 'show-em');
                });
                this.add(data[9].array[index], 'show-em');

                localStorage.setItem(name, JSON.stringify(value));
            });
        });

        localStorage.setItem(name, JSON.stringify(value));

        const index = JSON.parse(localStorage.getItem(name))[0];
        this.maintains(data, index);
    }

    add(data, value) {
        data.classList.add(value);
    }

    remove(data, value) {
        data.classList.remove(value);
    }

    maintains(data, index) {
        this.add(data[9].array[index], 'show-em');
    }
}