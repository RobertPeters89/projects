const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector('[data-js="card-container"]');
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const questionCounter = document.querySelector('[data-js="question-counter"]');
const answerCounter = document.querySelector('[data-js="answer-counter"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElement = event.target;

  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  const newArticle = document.createElement("article");
  newArticle.classList.add("Question");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("bookmark");
  bookmarkButton.setAttribute("data-js", "bookmark");
  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("active");
  });

  const question = document.createElement("h2");
  question.textContent = data.question;

  const answer = document.createElement("p");
  answer.classList.add("hide");
  answer.setAttribute("data-js", "hidden-answer");
  answer.textContent = data.answer;

  const answerButton = document.createElement("button");
  answerButton.classList.add("quiz-btn");
  answerButton.setAttribute("data-js", "show-answer");
  answerButton.textContent = "Show Answer";
  answerButton.addEventListener("click", () => {
    if (answer.classList.contains("hide")) {
      answer.classList.remove("hide");
      answerButton.textContent = "Hide Answer";
    } else {
      answer.classList.add("hide");
      answerButton.textContent = "Show Answer";
    }
  });

  const tagsDiv = document.createElement("div");
  tagsDiv.classList.add("tags");

  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = data.tag;

  tagsDiv.append(tag);

  newArticle.append(bookmarkButton, question, answer, answerButton, tagsDiv);

  cardContainer.append(newArticle);

  event.target.reset();
});

question.addEventListener("input", () => {
  questionCounter.textContent =
    150 - question.value.length + " characters left";
});

answer.addEventListener("input", () => {
  answerCounter.textContent = 150 - answer.value.length + " characters left";
});
