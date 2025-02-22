//declare global variables to keep track of player's score
let humanScore = 0;
let computerScore = 0;

// get computer choice
//get random number between 1 - 3
function getComputerChoice() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let random = getRandomInt(1, 3); //random is 1, 2, or 3

  switch (random) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function getHumanChoice() {
  let random = prompt("1 = Rock, 2 = Paper, and 3 = Scissors");

  switch (random) {
    case "1":
      return "rock";
    case "2":
      return "paper";
    case "3":
      return "scissors";
  }
}

//function to play one round of the game
function playRound(computerChoice, humanChoice) {
  if (computerChoice === "rock" && humanChoice === "rock") {
    console.log("It's a tie.");
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your score: ${humanScore}`);
  } else if (computerChoice === "paper" && humanChoice === "paper") {
    console.log("It's a tie.");
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your score: ${humanScore}`);
  } else if (computerChoice === "scissors" && humanChoice === "scissors") {
    console.log("It's a tie.");
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your score: ${humanScore}`);
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("computer wins this round.");
    computerScore += 1;
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your score: ${humanScore}`);
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("computer wins this round.");
    computerScore += 1;
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your score: ${humanScore}`);
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("computer wins this round.");
    computerScore += 1;
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your score: ${humanScore}`);
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win this round.");
    humanScore += 1;
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your score: ${humanScore}`);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win this round.");
    humanScore += 1;
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your score: ${humanScore}`);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win this round.");
    humanScore += 1;
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your score: ${humanScore}`);
  }
}
//enter in the prompt how many rounds you would like to play
numberOfRounds = prompt("how many rounds would you like to play?");

playGame(numberOfRounds);
function playGame(numberOfRounds) {
  //store computer's choice
  let computerSelection;
  //get Human's choice
  let humanSelection;

  //using numberOfRounds use the loop to play given amount of rounds
  for (let i = 1; i <= numberOfRounds; i++) {
    humanSelection = getHumanChoice();
    console.log(`You: ${humanSelection}`);
    computerSelection = getComputerChoice();
    console.log(`Computer: ${computerSelection}`);
    playRound(computerSelection, humanSelection);
    console.log("--------------------------------------------------");
  }

  if (humanScore > computerScore) {
    console.log(
      "%cYOU'VE WON the GAME!!! :) Press F5 on your keyboard to play again.",
      "color: red"
    );
    console.log("--------------------------------------------------");
  } else if (computerScore > humanScore) {
    console.log(
      "Sorry, you lose - the computer has won the game:( Press F5 on your keyboard to play again."
    );
    console.log("--------------------------------------------------");
  } else {
    console.log("It a tie - Press F5 on your keyboard to play again.");
    console.log("--------------------------------------------------");
  }
}
