//1. generate computer input
//2. grab player input
//3. evaluate winner
//4. iterate 5 times
//5. output grand winner




//let computer = getComputerChoice();
var choice = window.prompt("Enter rock, paper, or scissors:");
function playerSelection() {
   choice = choice.toLowerCase();
   if (choice === "rock" || choice === "paper" || choice === "scissors") {
        console.log(choice);
        return choice;
    } else return "Please enter: rock, paper, or scissors"; 
};
choice = playerSelection();

function playRound() {
    function getComputerChoice() {
        let num = Math.random();
        if (num < .33) {return "rock"}
        if (num > .66) {return "scissors"}
        else {return "paper"};
    };

    let computer = getComputerChoice();

    if (choice === "rock") {
        if (computer === "rock") {
            return "Tie";
        };
        if (computer === "paper") {
            return "You Lose! paper beats rock";
        };
        if (computer === "scissors") {
            return "You Win! rock beats scissors";
        };
    };
    if (choice === "paper") {
        if (computer === "paper") {
            return "Tie";
        };
        if (computer === "rock") {
            return "You Win! paper beats rock";
        };
        if (computer === "scissors") {
            return "You Lose! scissors beats paper";
        };
    };
    if (choice === "scissors") {
        if (computer === "scissors") {
            return "Tie";
        };
        if (computer === "paper") {
            return "You Win! scissors beats paper";
        };
        if (computer === "rock") {
            return "You Lose! rock beats scissors";
        };
    };
};
