'use strict';

export default class Generator {
    constructor(data, parent) {
        this.data = data;
        this.parent = parent;

        this.create()
        .then(value => this.attrs(value))
        .then(value => this.add(value));
    }

    async create() {
        for(let i = 0; i < this.data.number; i++) {
            this.data.name = document.createElement(this.data.element);

            this.data.array.push(this.data.name);
        }

        return this.data;
    }

    async attrs(value) {
        value.array.forEach((element, index, array) => {
            for(let i = 0; i < this.data.type.length; i++) {
                element.setAttribute(this.data.type[i], this.data.value[i]);
            }

            element.innerHTML = this.data.text[index];

            if(element.innerHTML == 'undefined') {
                element.innerHTML = '';
            }
        });

        return value;
    }

    async add(value) {
        if(this.parent.length > 1) {
            this.parent.forEach((element, index) => {
                element.append(value.array[index]);

                if(element.innerHTML == 'undefined') {
                    element.innerHTML = '';
                }
            });
        }else {
            value.array.forEach(element => {
                this.parent.append(element);
            });
        }
    }
}