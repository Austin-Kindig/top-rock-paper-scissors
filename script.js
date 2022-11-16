var victory = 0;

//index.html edits
//create, format, and insert rock selection button
const rock = document.querySelector('#rock');
const rockButton = document.createElement('button');
rockButton.classList.add('rockButton');
rockButton.textContent = "Rock";
rock.appendChild(rockButton);
//connect rock button to game functionality
rockButton.addEventListener('click', () => {
    playRound('rock');
    display.textContent = `Score: ${victory}`;
});

//create, format, and insert paper selection button
const paper = document.querySelector('#paper');
const paperButton = document.createElement('button');
paperButton.classList.add('paperButton');
paperButton.textContent = "Paper";
paper.appendChild(paperButton);
//connect rock button to game functionality
paperButton.addEventListener('click', () => {
    playRound('paper');
    display.textContent = `Score: ${victory}`;
});


//create, format, and insert scissors selection button
const scissors = document.querySelector('#scissors');
const scissorsButton = document.createElement('button');
scissorsButton.classList.add('scissorsButton');
scissorsButton.textContent = "Scissors";
scissors.appendChild(scissorsButton);
//connect rock button to game functionality
scissorsButton.addEventListener('click', () => {
    playRound('scissors');
    display.textContent = `Score: ${victory}`;
});


//create results display
const resultDisplay = document.querySelector('body');
const display = document.createElement('div');
display.classList.add('display');
//resultDisplay.appendChild(display);
display.textContent = `Score: ${victory}`;
resultDisplay.appendChild(display);




/*function game() {
    let victory = 0;
    //iterate "playRound" five times and log who won the most
    for (let i = 0; i < 5; i++) {
        condition = playRound();
        if (condition === "win") {
            victory++;
        }
        if (condition === "lose") {
            victory--;
        }
    }
    if (victory > 0) {
        console.log("You win!");
    }
    if (victory < 0) {
        console.log("You lose!");
    } else {
        console.log("tie!");
    }
};*/

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
//check player input against computer selection to determine round's winner
function playRound(player) {
    //let player = playerSelection();
    let computer = getComputerChoice();
    if (player === computer) {
        alert("tie!");
        return;
    }
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
        victory--;
    } else {
        result = "win";
        winner = player;
        loser = computer;
        victory++;
    }
    if (victory >= 5) {
        alert ("*Congratulations! You win!*");
        return;
    }
    if (victory <= -5) {
        alert ("*Sorry! You lost to a computer!*");
        return;
    }
    alert(`you ${result}! ${winner} beats ${loser}.`);
};




//generate computer input
function getComputerChoice() {
    if (Math.random() < .33) {return "rock"}
    if (Math.random() > .66) {return "scissors"}
    else {return "paper"};
};