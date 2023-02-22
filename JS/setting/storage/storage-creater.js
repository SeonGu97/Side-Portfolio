export default function AddStorage(name, value, basic) {
  if (localStorage.getItem(name) == null) {
    value = [basic];
  } else {
    value = JSON.parse(localStorage.getItem(name));
  }

  localStorage.setItem(name, JSON.stringify(value));
}
