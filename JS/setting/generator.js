'use strict';

export default class Generator {
    constructor(data, parent) {
        this.data = data;
        this.parent = parent;

        for(let i = 0; i < this.data.number; i++) {
            this.create();
            this.attrs();
            this.array();
            this.add(i);
        }
    }

    create() {
        this.data.name = document.createElement(this.data.element);
    }

    attrs() {
        for(let i = 0; i < this.data.type.length; i++) {
            this.data.name.setAttribute(this.data.type[i], this.data.value[i]);
        }
    }

    array() {
        this.data.array.push(this.data.name);
    }

    add(i) {
        this.i = i;

        if(Array.isArray(this.parent)) {
            this.parent[this.i].append(this.data.name);

            this.data.name.innerHTML = this.data.text[this.i];
        }else {
            this.parent.append(this.data.name);
            
            this.data.name.innerHTML = this.data.text[this.i];
        }

        if(this.data.name.innerHTML == 'undefined') {
            this.data.name.innerHTML = '';
        }
    }
}