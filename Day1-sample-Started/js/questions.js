const questions = [
    {
      text: `What will be the output of the following code?
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x);
}
testVar();`,
      options: ["10", "undefined", "ReferenceError", "null"],
      correct: "10"
    },
    {
      text: `What will be the output of the following code?
function testLet() {
  if (true) {
    let y = 20;
  }
  console.log(y);
}
testLet();`,
      options: ["20", "undefined", "ReferenceError", "null"],
      correct: "ReferenceError"
    },
    {
      text: `What will be the output?
let value = "b";
switch (value) {
  case "a":
    console.log("A");
  case "b":
    console.log("B");
  case "c":
    console.log("C");
}`,
      options: ["B", "B, C", "A, B, C", "Syntax Error"],
      correct: "B, C"
    },
    {
      text: `Which loop correctly prints only even numbers from 0 to 4?`,
      options: [
        "for(let i=0; i<5; i++) { if(i%2==0) console.log(i); }",
        "for(let i=0; i<=5; i+=2) console.log(i);",
        "for(let i=0; i<5; i++) { if(i%2!=0) continue; console.log(i); }",
        "All of the above"
      ],
      correct: "All of the above"
    },
    {
      text: `Given the HTML:
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
Which code correctly selects all <li> elements?`,
      options: [
        'document.getElementById("li")',
        'document.querySelector("li")',
        'document.getElementsByTagName("li")',
        'document.querySelectorAll("ul")'
      ],
      correct: "document.getElementsByTagName(\"li\")"
    },
    {
      text: `Given the HTML:
<div id="container">
  <button class="btn">Button 1</button>
  <button class="btn special">Button 2</button>
  <button class="btn">Button 3</button>
</div>
You want to log the text only when the button with class "special" is clicked, using event delegation. Which code is correct?`,
      options: [
        `document.getElementById("container").addEventListener("click", function(e) {
  if (e.target.className === "special") {
    console.log(e.target.textContent);
  }
});`,
        `document.getElementById("container").addEventListener("click", function(e) {
  if (e.target.matches(".special")) {
    console.log(e.target.textContent);
  }
});`,
        `document.querySelector(".special").addEventListener("click", function(e) {
  console.log(e.target.textContent);
});`,
        `document.querySelectorAll(".btn").addEventListener("click", function(e) {
  if (e.target.matches(".special")) {
    console.log("Special clicked");
  }
});`
      ],
      correct: `document.getElementById("container").addEventListener("click", function(e) {
  if (e.target.matches(".special")) {
    console.log(e.target.textContent);
  }
});`
    },
    {
      text: `What will the function log?
function sumAll(...nums) {
  console.log(nums.length);
}
sumAll(1, 2, 3, 4);`,
      options: ["4", "3", "undefined", "Error"],
      correct: "4"
    },
    {
      text: `Which code correctly creates a shallow copy of an object person?
const person = { name: "Ali", address: { city: "Toronto" } };`,
      options: [
        "const copy = { ...person };",
        "const copy = person;",
        "Both A and B",
        "Neither A nor B (deep copy needed)"
      ],
      correct: "const copy = { ...person };"
    }
  ];

  export default questions;
