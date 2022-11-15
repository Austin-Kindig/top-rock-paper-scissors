
//3. evaluate winner
//4. iterate 5 times
//5. output grand winner




//get and return player selection
function playerSelection() {
    let choice = "";
     //look for invalid selection
     while (!((choice === "rock") || (choice === "paper") || (choice === "scissors"))) {
        alert("please enter 'rock', 'paper', or 'scissors'");
    //get input and reformat
    choice = window.prompt("rock, paper, or scissors?").toLowerCase();
     }
     //output selection
     return choice;
};

function playRound() {
    let player = playerSelection();
    let computer = getComputerChoice();
    let result = "";
    let winner = "";
    let loser = "";
    if ((player === "rock") && (computer === "paper")) {
            winner = computer;
            loser = player;
    }
    if ((player === "paper") && (computer === "scissors")) {
            winner = computer;
            loser = player;
    }
    if ((player === "scissors") && (computer === "rock")) {
            winner = computer;
            loser = player;
    }
    if (winner === computer) {
        result = "lose";
    } else {
        result = "win";
        winner = player;
        loser = computer;
    }
    if (player === computer) {
        console.log("tie!");
        return "tie";
    }
    console.log(`you ${result}! ${winner} beats ${loser}.`);
    return result;
};




//generate computer input
function getComputerChoice() {
    if (Math.random() < .33) {return "rock"}
    if (Math.random() > .66) {return "scissors"}
    else {return "paper"};
};