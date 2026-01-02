// Selecting the required elements
let numberElements = document.getElementsByClassName("number");
let firstNumberElement = numberElements[0];
let secondNumberElement = numberElements[1];

let userInputElement = document.querySelector(".user-input");
let gameResultElement = document.querySelector(".game-result");

let checkButtonElement = document.getElementById("checkButton");
let restartButtonElement = document.getElementById("restartButton");

// Function to generate random numbers
function generateNumbers() {
    let random1 = Math.ceil(Math.random() * 100);
    let random2 = Math.ceil(Math.random() * 100);

    firstNumberElement.textContent = random1;
    secondNumberElement.textContent = random2;

    gameResultElement.textContent = "";
    userInputElement.value = "";
}

// Function to check user's answer
checkButtonElement.addEventListener("click", function () {
    let num1 = parseInt(firstNumberElement.textContent);
    let num2 = parseInt(secondNumberElement.textContent);
    let userValue = parseInt(userInputElement.value);

    let correctSum = num1 + num2;

    if (userValue === correctSum) {
        gameResultElement.textContent = "Congratulations! You got it right!";
        gameResultElement.style.color = "#028a0f";
    } else {
        gameResultElement.textContent = "Oops! That's not correct. Try again.";
        gameResultElement.style.color = "#ee1414ff";
    }
});

// Restart button → Generate new numbers
restartButtonElement.addEventListener("click", function () {
    generateNumbers();
});

// Generate numbers when page loads
generateNumbers();
