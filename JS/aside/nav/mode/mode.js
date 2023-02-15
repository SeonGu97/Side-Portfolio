'use strict';

import Front from "./front/front.js";
import Back from "./back/back.js";

export default class Mode {
    constructor(generator, data) {
        const mode = new generator(data[4], data[2].name);

        const front = new Front(generator, data);
        const back = new Back(generator, data);

        const name = 'Dark-Mode';
        let value;

        if(localStorage.getItem(name) == null) {
            value = [false];
        }else {
            value = JSON.parse(localStorage.getItem(name));
        }

        data[4].name.addEventListener('click', e => {
            const target = e.target;

            this.toggle(target, 'active');
            this.toggle(data[0].name, 'dark-mode');
            this.toggle(data[1].name, 'dark-aside');
            data[5].array.forEach(element => {
                this.toggle(element, 'dark-list');
            });
            this.toggle(data[6].name, 'f-active');
            this.toggle(data[7].name, 'b-active');

            let boolean;

            if(data[4].name.classList.contains('active')) {
                boolean = true;
            }else {
                boolean = false;
            }

            value.shift();
            value.push(boolean);

            localStorage.setItem(name, JSON.stringify(value));
        });
        
        localStorage.setItem(name, JSON.stringify(value));

        this.boolean = JSON.parse(localStorage.getItem(name))[0];
        this.index = JSON.parse(localStorage.getItem('Index'))[0];

        this.maintains(data);
    }

    add(element, value) {
        element.classList.add(value);
    }

    remove(element, value) {
        element.classList.remove(value);
    }

    replace(element, value1, value2) {
        element.classList.replace(value1, value2);
    }

    toggle(element, value) {
        element.classList.toggle(value);
    }

    maintains(data) {
        if(this.boolean) {
            this.add(data[0].name, 'dark-mode');
            this.add(data[1].name, 'dark-aside');
            this.add(data[4].name, 'active');
            data[5].array.forEach(element => {
                this.add(element, 'dark-list');
            });
            this.add(data[6].name, 'f-active');
            this.add(data[7].name, 'b-active');
        }else {
            
        }   
    }
}