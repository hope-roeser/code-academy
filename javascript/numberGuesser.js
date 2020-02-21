let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10)
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
  if (Math.abs(targetNumber - userGuess) > Math.abs(targetNumber - computerGuess)) {
    return false
  } else {
    return true
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore ++
  } else {
    computerScore ++
  }
}

function advanceRound() {
  currentRoundNumber ++
}
