const bodyElement = document.querySelector('[data-js="body"]');
const toggle = document.querySelector("#dark");

toggle.addEventListener("change", () => {
  bodyElement.classList.toggle("dark-mode");
});
