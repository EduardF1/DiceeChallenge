/**
 * Handle initial web page load and refresh/reload event.
 */
if (window.performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
    resetHeader();
}

function getDieRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    const randomNumber1 = getDieRandomNumber();
    const randomNumber2 = getDieRandomNumber();

    document.querySelectorAll(".dice img")[0].src = `images/dice${randomNumber1}.png`;
    document.querySelectorAll(".dice img")[1].src = `images/dice${randomNumber2}.png`;

    displayWinner(randomNumber1, randomNumber2);
}

function displayWinner(number1, number2) {
    if (number1 < number2) {
        document.querySelector("h1").textContent = "Player 2 Wins ! 🚩";
    } else if (number1 > number2) {
        document.querySelector("h1").textContent = "🚩 Player 1 Wins !";
    } else {
        document.querySelector("h1").textContent = "🚩 Draw! 🚩";
    }
}

/**
 *  A function to reset the header of the web page after the winner of the dice
 *  game is declared (Prompts the user to what needs to be done to play another
 *  game).
 */
function resetHeader() {
    setTimeout(() => {
        document.querySelector("h1").textContent = "Refresh Me !";
    }, 5000);
}

