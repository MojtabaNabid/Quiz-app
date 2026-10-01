const scoreEle = document.getElementById("score-text");

const score = JSON.parse(localStorage.getItem("score"));
console.log(score);

scoreEle.innerText = score;
