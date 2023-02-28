let timer;
let delay = "100";

const resize = (data, _class) => {
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
      }
    }, delay);
  });
};

export default resize;
