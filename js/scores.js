const highScores = JSON.parse(localStorage.getItem("highScores"));


const list = document.querySelector("ol")

const content= highScores.map((score, index) => {
    // console.log(score);
    return `
        <ol>
            <li>
                <span>${index + 1}</span>
                <p>${score.name}</p>
                <span>${score.score}</span>
            </li>
        </ol>
    `;
})

list.innerHTML = content.join("") //to remove "," between our array elements