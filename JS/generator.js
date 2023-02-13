'use strict';

export default class Generator {
    constructor(data, parent) {
        this.data = data;
        this.parent = parent;

        for(let i = 0; i < this.data.number; i++) {
            this.create();
            this.attrs();
            this.text();
            this.add();
            this.array();
        }

        console.log(this.data.array)
    }

    create() {
        this.data.name = document.createElement(this.data.element);
    }

    attrs() {
        for(let i = 0; i < this.data.type.length; i++) {
            this.data.name.setAttribute(this.data.type[i], this.data.value[i]);
        }
    }

    text() {
        for(let i = 0; i < this.data.text.length; i++) {
            this.data.name.innerHTML = this.data.text[i];
        }
    }

    add() {
        this.parent.append(this.data.name);
    }

    array() {
        this.data.array.push(this.data.name);
    }
}