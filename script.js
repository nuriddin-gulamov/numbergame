// Using Strict Mode
"use strict";

// Objects
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const body = document.querySelector("body");
const number = document.querySelector(".number");
const again = document.querySelector(".again");
const guessTitle = document.querySelector(".guess-title");
const title = document.querySelector("title");
const highScore = document.querySelector(".highscore");
const secretNumber = Math.round(Math.random() * 20) + 1;

// Game Logic
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") check.click();
});

check.addEventListener("click", function () {
    // Objects
    const guess = Number(document.querySelector(".guess").value);

    // Manipulating HTML & CSS
    if (!guess) document.querySelector(".message").textContent = "⛔ No number!"; 
    else if (guess === secretNumber) {
        // Manipulating HTML
        message.textContent = "🎉 Correct Number!";
        guessTitle.textContent = "Great!";
        title.textContent = "Great!";
        number.textContent = secretNumber;
        highScore.textContent = score.textContent;

        // Manipulating CSS
        body.style.backgroundColor = "#60b347";
        number.style.width = "30rem";

        // Reloading the page on a reclick of "check" when user wins
        check.addEventListener("click", function () {
            location.reload();
        });
    }
    else if (guess > secretNumber) message.textContent = "📈 Too high!";
    else if (guess < secretNumber) message.textContent = "📉 Too low!";
    if (!guess || guess === secretNumber) return;
    else if (Number(score.textContent) > 0) score.textContent = Number(score.textContent) - 1
    else if (Number(score.textContent) === 0) message.textContent = "❌ You lost the game!";
});

again.addEventListener("click", function () {
    location.reload();
});