let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submitBtn");
const userInput = document.querySelector("#guessInput");
const previuosGuess = document.querySelector(".pastguesses");
const remaining = document.querySelector(".remaining");
const lowHigh = document.querySelector(".lowHigh");
const newGameBtn = document.querySelector("#restartBtn");
const clearBtn = document.querySelector("#clearBtn");
const StarOver = document.querySelector(".resultNumbers");

const p = document.createElement("p");

let prevGuess = []; // saving geusses in array to show user

let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);

    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a number more than 1 ");
  } else if (guess > 100) {
    alert("please enter a number less than 100 ");
  } else {
    prevGuess.push(guess);
  }
  if (numGuess === 10) {
    displayGuess(guess);
    displayMessage(`Game Over. Random Number was ${randomNumber}`);
    endgame();
    return;
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
  // validate guess the value that it is ion between 1 to 100 or a legal value
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it Right`);
    endgame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  }
  // checkguess check the value is equal to random num or high and low
}

function displayGuess(guess) {
  userInput.value = "";
  previuosGuess.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
  //displayguess clean the value of input and array update and upadte remainig guesse
}

function displayMessage(message) {
  lowHigh.innerHTML = `<h2>${message}</h2>`;
  // displaymessage give you message of low or high
}

function endgame() {
  userInput.value = "write a number";
  userInput.setAttribute("disabled", "");
  //   p.classList.add('button')
  restartBtn.style.display = "block";

  p.innerHTML = `<h2 id ="newGame">Start new Game</h2> `;
  playGame = false;
  StarOver.appendChild(p);
  newGame();
}

function newGame() {
  // Get the new game button by its ID
  restartBtn.style.display = "block";

  newGameBtn.addEventListener("click", function () {
    // Reset game variables for a new game
    randomNumber = parseInt(Math.random() * 100 + 1);
    numGuess = 1;
    prevGuess = [];
    previuosGuess.innerHTML = ""; // Clear previous guesses
    remaining.innerHTML = `${11 - numGuess}`; // Reset remaining guesses
    userInput.removeAttribute("disabled"); // Enable input field
    lowHigh.innerHTML = ""; // Clear messages
    restartBtn.style.display = "block"; // Remove the start new game message
    playGame = true; // Start a new game
  });
}
