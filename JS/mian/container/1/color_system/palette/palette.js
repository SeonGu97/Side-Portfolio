"use strict";

import Color from "./color/color.js";

export default class Palette {
  constructor(generator, data, parent) {
    const palette = new generator(data[26], parent);

    const color1 = new Color(generator, data, data[26].array[0]);
    const color2 = new Color(generator, data, data[26].array[1]);

    const color = [
      "#FAFAFA",
      "#f5f5f5",
      "#eee",
      "#e0e0e0",
      "#bdbdbd",
      "#9e9e9e",
      "#757575",
      "#616161",
      "#424242",
      "#212121",
      "#eceff1",
      "#cfd8dc",
      "#b0bec5",
      "#90a4ae",
      "#78909c",
      "#607d8b",
      "#546e7a",
      "#455a64",
      "#37474f",
      "#263238",
    ];

    data[27].array.forEach((element, index) => {
      element.index = index;
      element.style.background = color[index];

      element.addEventListener("click", (e) => {
        const target = e.target;
        const delay = 300;
        const text = "💡 색상이 클립보드에 복사 되었습니다.";

        this.timer(delay, color[target.index], text);
      });
    });
  }

  timer(delay, text1, text2) {
    setTimeout(() => {
      this.clip(text1, text2);
    }, delay);
  }

  async clip(text1, text2) {
    window.navigator.clipboard.writeText(text1);

    this.report(text2);
  }

  report(text) {
    alert(text);
  }
}
