/*
Instruction:
In this sample every time one quiz should show to the user and user select the answer, then correctness of the answer should be checked and then let user to go to the next question.
finally the total score should be presented to the user.
1- initiate a package and install a bundler like vite or parcel 
2- config packege.json
---
"source": "index.html",
  "scripts": {
    "run": "vite",
    "build": "vite build"
  },
-----
1- all questions are in questions.js. import it 
import questions from "./questions";

2- create a function showQuestion(index) that show question in the index. this function add question text and all option in the below format:
<div>
    <input type="radio" name="quiz-option" id={id} value='{option}'>
    <label for="{option}">{option}</label>
</div>
3- keep the current question in a variable and call showQuestion(current)
4- add an event listener for form (submit) to check the correct answer and increase score if the answer is correct. show the correct answer in the result
5- let user go to the next if they select an option. dont let them to change answer after submitting.
6- after final question, show them the score

*/

import questions from "./questions.js";

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const form = document.getElementById("quiz-form");
const submitBtn = document.querySelector("button[type=submit]");
const nextBtn = document.querySelector(".next");

function showQuestion(index) {
  const question = questions[index];
  questionEl.textContent = question.text;
  optionsEl.innerHTML = "";
  resultEl.innerHTML = "";
  submitBtn.removeAttribute("disabled");
  nextBtn.setAttribute("disabled", true);
  question.options.forEach((option, i) => {
    /*
    const div = document.createElement("div");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "quiz-option";
    input.id = `option-${i}`;
    input.value = option;
    const label = document.createElement("label");
    label.htmlFor = `option-${i}`;
    label.textContent = option;
    div.appendChild(input);
    div.appendChild(label);
    optionsEl.appendChild(div);
    */
   const id = "quiz-" + i;
   optionsEl.innerHTML += `<div><input type="radio" name="quiz-option" 
                          id=${id} value='${option}'><label for="${id}">${option}</label></div>`;
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedOption = document.querySelector('input[name="quiz-option"]:checked');

  // No selection, return directly
  if (!selectedOption) {
    resultEl.textContent = "Please select an answer...";
    return;
  }

  // Disable submit button avolid to submit multiply times
  document.querySelector("button[type=submit]").setAttribute("disabled", true);

  // Enable next button
  document.querySelector(".next").removeAttribute("disabled");

  // Check answer
  const answer = selectedOption.value;
  if (answer === questions[current].correct) {
    score++;
    resultEl.textContent = "Correct!";
  }
  else {
    resultEl.textContent = `Correct answer: ${questions[current].correct}`;
  }
})

document.querySelector(".next").addEventListener("click", (e) => {
  current++;
  if (current < questions.length) {
    showQuestion(current);
  }
  else {
    questionEl.textContent = "";
    optionsEl.innerHTML = "";
    submitBtn.setAttribute("visible", false);
    resultEl.innerHTML = "Your score: " + score + "/" + questions.length;
  }
})

showQuestion(current);