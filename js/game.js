const container = document.getElementById("container");
const loader = document.getElementById("loader");

const URL =
  "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";

let formattedData = null;

const formatData = (questionedData) => {
  console.log(questionedData[0]);
  const result = questionedData.map(item => {
    const questionObject = {question: item.question};
    const answers = [...item.incorrect_answers];
    const correctAnswerIndex = Math.floor(Math.random() * 4);
    answers.splice(correctAnswerIndex,0,item.correct_answer)
    questionObject.answers = answers;
    questionObject.correctAnswerIndex = correctAnswerIndex;
    return questionObject;
  })
  console.log(result);
  return result;
};

const fetchData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  //   formattedData = json;
  formatData(json.results);
  start();
};

const start = () => {
  loader.style.display = "none";
  container.style.display = "block";
};

window.addEventListener("load", fetchData);
