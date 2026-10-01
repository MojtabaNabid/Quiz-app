const score = JSON.parse(localStorage.getItem("score"));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// get highscores from localStorage, if there was nothing (for example for the first time)
// it will return an empty array

const scoreEle = document.getElementById("score-text");
const button = document.querySelector("button");
const input = document.querySelector("input");

scoreEle.innerText = score;

const saveHandler = () => {
  if (!input.value || !score) {
    alert("Ivalid username or score!!");
  } else {
    const finalScore = { name: input.value, score };
    highScores.push(finalScore); //push to the Array which we get from localstorage on top of the code
    highScores.sort((a, b) => b.score - a.score); //sorting the objects based on their scores amount
    highScores.splice(10); //we don't want more than 10 username score to save
    localStorage.setItem("highScores", JSON.stringify(highScores));
    // console.log(highScores);
    // localStorage.removeItem("score")
    window.location.assign("/"); //got to homepage
  }
};
button.addEventListener("click", saveHandler);
