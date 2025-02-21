//declare global variables to keep track of player's score
let humanScore = 0;
let computerScore = 0;

// get computer choice
//get random number between 1 - 3
function getComputerChoice() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min +1)) + min;
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

//store computer's choice
let computerSelection = getComputerChoice();
console.log(computerSelection);

//get Human's choice
//get random number between 1 - 3
function getHumanChoice() {

    let random = prompt("1 = Rock, 2 = Paper, and 3 = Scissors")

    switch (random) {
        case "1":
            return "rock";
        case "2":
            return "paper";
        case "3":
            return "scissors";
    }
}
let humanSelection = getHumanChoice();
console.log(humanSelection);

//function to play one round of the game
function playRound(computerChoice, humanChoice) {
    if (computerChoice === "rock" && humanChoice === "rock") {
        console.log("tie");
        console.log(computerScore);
        console.log(humanScore);
    }
    else if (computerChoice === "paper" && humanChoice === "paper") {
        console.log("tie");
        console.log(computerScore);
        console.log(humanScore);
    }
    else if (computerChoice === "scissors" && humanChoice === "scissors") {
        console.log("tie");
        console.log(computerScore);
        console.log(humanScore);
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("computer wins");
        computerScore += 1;
        console.log(computerScore);
        console.log(humanScore);
    }        
    else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("computer wins");
        computerScore += 1;
        console.log(computerScore);
        console.log(humanScore);
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("computer wins");
        computerScore += 1;
        console.log(computerScore);
        console.log(humanScore);
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("human wins");
        humanScore += 1;
        console.log(computerScore);
        console.log(humanScore);
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("human wins");
        humanScore += 1;
        console.log(computerScore);
        console.log(humanScore);
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("human wins");
        humanScore += 1;
        console.log(computerScore);
        console.log(humanScore);
    }
}

// numberOfRounds = prompt("how many rounds would you like to play?")

// function playGame(numberOfRounds) {
//     for (let i = 1; i <= numberOfRounds; i++){
//         playRound(computerSelection, humanSelection)
//     }    
// }


