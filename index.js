let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;

let questionEl = document.getElementById("question");
let inputEl = document.getElementById("input");
let formEl = document.getElementById("form");
let scoreEl = document.getElementById("score");

let score = 0;
let correctAns = num1 * num2;

questionEl.innerText = "What is " + num1 + " multiply by " + num2 + "?";

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  let userAns = Number(inputEl.value);

  switch(userAns){
    case correctAns: 
        score++;
        break; 
        default: 
        if (score>0 ){
            score--;
        }
  }

  scoreEl.innerText = "score: " + score;

  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  correctAns = num1 * num2;

  questionEl.innerText = "What is " + num1 + " multiply by " + num2 + "?";

  inputEl.value = "";
});
