const form = document.querySelector('[data-js="form"]');
const textarea = document.querySelector("#question");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElement = event.target;

  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  console.log(data);

  formElement.reset();
});
