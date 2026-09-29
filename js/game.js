import formatData from "./helper.js";

const container = document.getElementById("container");
const loader = document.getElementById("loader");
const questionText = document.getElementById("question-text");
const answerList = document.querySelectorAll(".answer-text");
const scoreText = document.getElementById("score");
const nextButton = document.getElementById("next-button");
const questionNumber = document.getElementById("question-number");

const CORRECT_BONUS = 10;

const URL =
  "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";

let formattedData = null; 
let questionIndex = 0;
let correctAnswer = null;
let score = 0;
let isAccepted = true;

const fetchData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  formattedData = formatData(json.results);
  //   console.log(formattedData);
  start();
};

const start = () => {
  showQuestion(formattedData);
  loader.style.display = "none"; // hiding the loader
  container.style.display = "block"; // showing the question box and other buttons
};

const showQuestion = () => {
  questionNumber.innerText = questionIndex + 1; // for showing the question number at the top
  const { question, answers, correctAnswerIndex } =
    formattedData[questionIndex];
  //   console.log(question, answers, correctAnswerIndex);
  correctAnswer = correctAnswerIndex;
  console.log(correctAnswer);
  questionText.innerText = question;
  answerList.forEach((button, index) => {
    button.innerText = answers[index];
  });
};

const checkAnswer = (event, index) => {
  //   console.log(index);
  if (!isAccepted) return;  // for managing the classes like "correct" and "incorrect"
  isAccepted = false;  //assigning the false value to avoid user to select another button
  const isCorrect = index === correctAnswer ? true : false;
  if (isCorrect) {
    event.target.classList.add("correct");
    score += CORRECT_BONUS;
    scoreText.innerText = score;
  } else {
    event.target.classList.add("incorrect");
    // console.log(answerList[correctAnswer].classList)
    answerList[correctAnswer].classList.add("correct");
  }
};

const nextHandler = () => {
  questionIndex++; // keep tracking of the question number
  if (questionIndex < formattedData.length) { //if it reaches the 10th question
    isAccepted = true;  // make this true to avoid user to choose another button
    showQuestion();
    removeClasses(); // to remove correct and incorrect classes for the next question
  } else {
    localStorage.setItem("score",JSON.stringify(score)) // to save the score in local storage
    window.location.assign("./end.html")
  }
};

const removeClasses = () => {
  answerList.forEach((button) => (button.className = "answer-text"));
};

window.addEventListener("load", fetchData);
answerList.forEach((button, index) => {
  button.addEventListener("click", (event) => checkAnswer(event, index)); // because we can not enter the checkAnswer function with parameter directly
  // if we type just checkAnswer(index) => it will be automatically implemented
  // because of this we have to use arrow function here
});

nextButton.addEventListener("click", nextHandler);
