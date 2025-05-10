/*
Instruction: 
1-continue from the completed version of Day1-Sample 
2- create a back-end folder on the root and put questions.json inside it. 
3- on the terminal navigate to the back-end folder (cd back-end) then npm init -y and npm install json-server 
4- on back-end/package.json, add this script: "server": "json-server --watch questions.json --port 3001" 
5- create a new js file in js folder api.js and create a function getQuestions to return all questions. try to handle different errors like 404 in this function
6- import getQuestions in quiz.js and call it before calling for the firs time to fill questions array. 
Here is the place you can catch those errors you throw in getQuestions. 
---In JavaScript, errors thrown inside a Promise chain or an async function will bubble up (i.e., propagate upward) until they are caught by the nearest .catch() or try...catch. 
7- add a try/catch to handle no option selection error 
8- Try to do the same for next button click handler, when the current go over the question length
 */

import {getQuestions} from "./api.js";

let current = 0;
let score = 0;
let questions = [];

// Get questions list from backend, and start quiz
getQuestions().then((data) => {
  questions = data;
  showQuestion(current);
}).catch((error) => {
  resultEl.textContent = `Error fetching questions: ${error}`;
})

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const form = document.getElementById("quiz-form");

function showQuestion(index) {
  const { text, options } = questions[index];
  questionEl.textContent = text;
  optionsEl.innerHTML = "";

  options.forEach((option, i) => {
    const id = `option-${i}`;
    optionsEl.innerHTML+=`<div>
          <input type="radio" name="quiz-option" id=${id} value='${option}'>
          <label for="${option}">${option}</label>
        </div>`;
  });
}

form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  e.preventDefault();

  try {
    const selected = document.querySelector('input[name="quiz-option"]:checked');
    // if (!selected) {
    //   resultEl.textContent = "Please select an answer.";
    //   return;
    // }

    // Throw exception if no any option is selected
    if (!selected) throw new Error("Please select an answer.");

    document.querySelector(".next").removeAttribute("disabled");
    document.querySelector("button[type=submit]").setAttribute("disabled",true );

    // Throw exception if current question has no correct answer in options
    if (!questions[current].options.find((item) => item == questions[current].correct)) {
      throw new Error("There is a problem in the question, no correct option.");
    }

    const correct = questions[current].correct;
    if (selected.value === correct) {
      score++;
      resultEl.textContent = "Correct!";
    } else {
      resultEl.textContent = `Incorrect! Correct answer: ${correct}`;
    }

  } catch (err) {
    resultEl.textContent = err.message;
  }
}
document.querySelector(".next").addEventListener("click", ()=> {
    current++;
    resultEl.textContent = "";

    try {
      if (current >= questions.length) {
        throw new Error("Finished");
      }

      showQuestion(current);
      form.reset();
      document.querySelector("button[type=submit]").removeAttribute("disabled");
      document.querySelector(".next").setAttribute("disabled",true );
    } catch (err) {
      if (err.message == "Finished") {
        showFinalScore();
        document.querySelector("button[type=submit]").setAttribute("disabled",true );
        document.querySelector(".next").setAttribute("disabled",true );
      } else {
        resultEl.textContent = err.message;
      }
    }

    /*
    if (current < questions.length) {
      showQuestion(current);
      form.reset();
      document.querySelector("button[type=submit]").removeAttribute("disabled");
      document.querySelector(".next").setAttribute("disabled",true );
    
    } else {
      showFinalScore();
      document.querySelector("button[type=submit]").setAttribute("disabled",true );
      document.querySelector(".next").setAttribute("disabled",true );

    }*/
});

function showFinalScore() {
  questionEl.textContent = `Quiz Finished!`;
  optionsEl.innerHTML = "";
  form.style.display = "none";
  resultEl.textContent = `Your score: ${score}/${questions.length}`;
}
