console.clear();

const bookmarkButton = document.querySelector('[data-js="bookmark"]');
const answer = document.querySelector('[data-js="hidden-answer"]');
const showAnswerButton = document.querySelector('[data-js="show-answer"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("active");
});

showAnswerButton.addEventListener("click", () => {
  if (answer.classList.contains("hide")) {
    answer.classList.remove("hide");
    showAnswerButton.textContent = "Hide Answer";
  } else {
    answer.classList.add("hide");
    showAnswerButton.textContent = "Show Answer";
  }
});
