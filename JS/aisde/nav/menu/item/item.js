"use strict";

import Text from "./text/text.js";
import Em from "./em/em.js";

export default class Item {
  constructor(generator, data, parent, _class, storage_data, storage_creater) {
    const item = new generator(data[5], parent);

    const text = ["Home", "Todo", "Project", "About"];

    this.Index = JSON.parse(localStorage.getItem(storage_data[0].name));

    if (data[1].array[1] == undefined) {
      const icon = document.querySelectorAll("i");

      data[1].array[0].childNodes[0].childNodes[0].childNodes.forEach(
        (element, index, array) => {
          const text1 = new Text(generator, data, element);
          const em1 = new Em(generator, data, element);

          element.childNodes[1].innerText = text[index];

          element.addEventListener("click", (e) => {
            const target = e.currentTarget;

            const target_index = data[9].array.indexOf(target.childNodes[2]);

            _class.remove_all(data[9].array, "paint");
            _class.add(target.childNodes[2], "paint");

            _class.remove_all(icon, "active");
            _class.add(target.childNodes[0], "active");

            this.Index.shift();
            this.Index.push(target_index);

            localStorage.setItem(
              storage_data[0].name,
              JSON.stringify(this.Index)
            );

            const asides = document.querySelectorAll("aside");

            const aside2 =
              asides[1].childNodes[0].childNodes[0].childNodes[this.Index];

            _class.remove_all(
              asides[1].childNodes[0].childNodes[0].childNodes,
              "active"
            );
            _class.add(aside2, "active");
          });
        }
      );
    } else {
      const icon = document.querySelectorAll("i");

      data[1].array[1].childNodes[0].childNodes[0].childNodes.forEach(
        (element, index) => {
          const text2 = new Text(generator, data, element);
          const em2 = new Em(generator, data, element);

          element.childNodes[1].innerText = text[index];
        }
      );
    }

    this.maintains(data, _class);
  }

  maintains(data, _class) {
    const asides = document.querySelectorAll("aside");

    if (data[5].array[this.Index] !== undefined) {
      _class.add(data[5].array[this.Index].childNodes[2], "paint");
      _class.add(data[5].array[this.Index].childNodes[0], "active");
      if (asides[1] !== undefined) {
        _class.add(
          asides[1].childNodes[0].childNodes[0].childNodes[this.Index],
          "active"
        );
      }
    }
  }
}
