"use strict";

import Generator from "./setting/generator.js";
const generator = Generator;

import { Data } from "./setting/data.js";
const data = Data;

import _Class from "./setting/class/_class.js";

import Storage_Creater from "./setting/storage/storage-creater.js";
import Storage_Data from "./setting/storage/storage-data.js";

import Aside from "./aisde/aside.js";
import Text from "./aisde/nav/menu/item/text/text.js";
import Em from "./aisde/nav/menu/item/em/em.js";
import Header from "./header/header.js";
import Exit from "./exit/exit.js";
import Library from "./aisde/library/library.js";
import Main from "./mian/main.js";

import resize from "./resize/resize.js";

export default class Index {
  constructor(generator, data) {
    const index = new generator(data[0], document.body);

    const _class = _Class;

    const storage_data = Storage_Data;
    const storage_creater = Storage_Creater;

    const Index = storage_creater(
      storage_data[0].name,
      storage_data[0].value,
      0
    );

    const Dark_Mode = storage_creater(
      storage_data[1].name,
      storage_data[1].value,
      false
    );

    //

    const aside1 = new Aside(
      generator,
      data,
      data[0].name,
      _class,
      storage_data,
      storage_creater
    );
    const aside2 = new Aside(
      generator,
      data,
      data[0].name,
      _class,
      storage_data,
      storage_creater
    );

    const header = new Header(generator, data, data[0].name, _class);

    const exit = new Exit(generator, data, data[0].name, _class);

    const library = new Library(generator, data, data[1].array[0], _class);

    this.Index = JSON.parse(localStorage.getItem(storage_data[0].name));
    this.Dark_Mode = JSON.parse(localStorage.getItem(storage_data[1].name));

    const main = new Main(generator, data, data[0].name, _class, this.Index[0]);

    this.text = ["Home", "Todo", "Project", "About"];

    data[5].array.forEach((element, index) => {
      if (index >= 4) {
        index -= 4;
      }

      element.index = index;

      const text = new Text(generator, data, element);
      const em = new Em(generator, data, element);

      element.childNodes[1].innerText = this.text[index];

      element.addEventListener("mouseenter", (e) => {
        const target = e.target;

        if (target.index == 3) {
          _class.add(data[14].name, "show");
        } else {
          _class.remove(data[14].name, "show");
        }
      });

      element.addEventListener("mouseleave", (e) => {
        _class.remove(data[14].name, "show");
      });
    });

    data[3].array.forEach((element, index, array) => {
      element.addEventListener("click", (e) => {
        const target = e.target;

        if (target.classList[0] == "item") {
          array.forEach((element) => {
            const index = element.childNodes[target.index];

            _class.remove_all(element.childNodes, "active");
            _class.add(index, "active");

            _class.remove_all(data[9].array, "paint");
            _class.add(data[9].array[target.index], "paint");
          });

          this.Index.shift();
          this.Index.push(target.index);

          localStorage.setItem(
            storage_data[0].name,
            JSON.stringify(this.Index)
          );

          data[17].array.forEach((element) => {
            element.remove();
          });
          data[16].name.appendChild(data[17].array[this.Index]);
        }
      });
    });

    data[2].array.forEach((element, index, array) => {
      element.addEventListener("click", (e) => {
        const target = e.target;

        if (target.classList[0] == "mode") {
          array.forEach((element) => {
            _class.toggle_all(element.childNodes[1].childNodes, "switch");
            _class.toggle(element.childNodes[1], "dark-mode");
            element.childNodes[0].childNodes.forEach((element) => {
              _class.toggle(element.childNodes[2], "dark-mode");
            });
            _class.toggle(element, "dark-mode");

            let boolean;

            if (element.childNodes[1].childNodes[0].classList[1] == "switch") {
              boolean = true;
            } else {
              boolean = false;
            }

            this.Dark_Mode.shift();
            this.Dark_Mode.push(boolean);
          });

          localStorage.setItem(
            storage_data[1].name,
            JSON.stringify(this.Dark_Mode)
          );
        }
      });
    });

    data[2].array[0].addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList[0] == "item") {
        target.index == 3
          ? _class.add(data[14].name, "fix")
          : _class.remove(data[14].name, "fix");
      }
    });

    data[0].name.addEventListener("click", (e) => {
      const target = e.target;

      if (target.classList[0] == "mode") {
        _class.toggle(data[0].name, "dark-mode");
        _class.toggle_all(data[1].array, "dark-mode");
        _class.toggle(data[10].name, "dark-mode");
        _class.toggle_all(data[14].array, "dark-mode");
        if (this.Index == 3) {
          _class.add(data[14].name, "fix");
        }
      }
    });

    this.maintains(data, _class);

    const _resize = resize;
    _resize(data, _class, this.Index);
  }

  maintains(data, _class) {
    data[3].array.forEach((element) => {
      _class.add(element.childNodes[this.Index], "active");
      _class.add(data[9].array[this.Index], "paint");
    });

    if (this.Dark_Mode[0]) {
      data[7].array.forEach((element) => {
        _class.add(element, "switch");
      });

      data[8].array.forEach((element) => {
        _class.add(element, "switch");
      });

      _class.add(data[0].name, "dark-mode");
      _class.add_all(data[1].array, "dark-mode");
      _class.add_all(data[2].array, "dark-mode");
      _class.add_all(data[4].array, "dark-mode");
      _class.add_all(data[9].array, "dark-mode");
      _class.add(data[10].name, "dark-mode");

      _class.add_all(data[14].array, "dark-mode");
    }

    if (this.Index == 3) {
      _class.add(data[14].name, "fix");
    }
  }
}

const index = new Index(generator, data);
