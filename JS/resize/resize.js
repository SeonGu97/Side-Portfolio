let timer;
let delay = "100";

const resize = (data, _class, index) => {
  window.addEventListener("resize", (e) => {
    clearTimeout(timer);

    const desktop_size = "1024px";
    const desktop = matchMedia(
      `screen and (min-width: ${desktop_size})`
    ).matches;

    timer = setTimeout(() => {
      if (desktop) {
        _class.remove(data[1].array[1], "show");
        _class.remove(data[11].name, "show");
        data[11].name.innerHTML = '<i class="bi bi-list"></i>';
        _class.remove(data[13].name, "show");

        if (index == 3) {
          _class.add(data[14].name, "fix");
        }
      } else {
        if (index == 3) {
          _class.contains(data[14].name, "fix") == true
            ? _class.remove(data[14].name, "fix")
            : "";
        }
      }
    }, delay);

    // const width = window.innerWidth;
    // data[16].name.style.width = `${width}px`;
  });
};

export default resize;
