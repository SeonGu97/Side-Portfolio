"use strict";

export default class Generator {
  constructor(data, parent) {
    this.data = data;
    this.parent = parent;

    this.create();
  }

  create() {
    for (let i = 0; i < this.data.number; i++) {
      this.data.name = document.createElement(this.data.element);

      this.attrs();

      this.array();

      this.add();

      this.text(i);
    }
  }

  attrs() {
    for (let i = 0; i < this.data.type.length; i++) {
      this.data.name.setAttribute(this.data.type[i], this.data.value[i]);
    }
  }

  array() {
    this.data.array.push(this.data.name);
  }

  add() {
    if (Array.isArray(this.parent)) {
      this.parent.forEach((element, index, array) => {
        element.appendChild(this.data.name);
      });
    } else {
      this.parent.appendChild(this.data.name);
    }
  }

  text(i) {
    this.data.name.innerHTML = this.data.text[i];

    if (this.data.name.innerHTML == "undefined") this.data.name.innerHTML = "";
  }
}
