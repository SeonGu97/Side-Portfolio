"use strict";

import Main_Wrod from "./main_word/main_word.js";

export default class Main_Text {
  constructor(generator, data, parent) {
    const main_text = new generator(data[19], parent);

    const main_word_1 = new Main_Wrod(generator, data, data[19].array[0]);
    const main_word_2 = new Main_Wrod(generator, data, data[19].array[1]);
    const main_word_3 = new Main_Wrod(generator, data, data[19].array[2]);

    const text = [
      "MY",
      "SIMPLE",
      "DESIGN",
      "WEBSITE.",
      "This website was created in JavaScript.",
      "(Scroll down for more)",
    ];

    data[20].array.forEach((element, index) => {
      element.innerText = text[index];
    });
  }
}
