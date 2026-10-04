const bodyElement = document.querySelector('[data-js="body"]');
const toggle = document.querySelector("#dark");

toggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");
});
