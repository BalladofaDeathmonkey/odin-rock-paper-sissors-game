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
let computerChoice = getComputerChoice();
console.log(computerChoice)

//get Human's choice
//get random number between 1 - 3
function getHumanChoice() {
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
let humanChoice = getHumanChoice();
console.log(humanChoice)