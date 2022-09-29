let playerScore = 0
let computerScore = 0;

function getComputerChoice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    min = 0;
    max = 3;
    let computerChoice = Math.floor(Math.random() * (max - min) + min);
    switch (computerChoice) {
        case 0: return "Rock";
        case 1: return "Paper";
        default: return "Scissor";
    }
}



function game() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        function playerSelection() {
            let playersPlay = parseInt(prompt("0 - Rock | 1 - Paper | 2 - Scissor", "0"));
            switch (playersPlay) {
                case 0: return "Rock";
                case 1: return "Paper";
                default: return "Scissor";
            }
        }

        const computerSelection = getComputerChoice();
        const playerSelections = playerSelection();


        function checkVictory() {
            if (playerSelections == computerSelection) {
                playerScore++;
                computerScore++;
                console.log(computerScore, playerScore);
            } else if ((computerSelection == "rock" && playerSelection == "scissors") ||
                (computerSelection == "scissors" && playerSelection == "paper") ||
                (computerSelection == "paper" && playerSelection == "rock")
            ) {
                computerScore++;
                console.log(computerScore, playerScore);
            } else {
                playerScore++
                console.log(computerScore, playerScore);;
            }
        }

        function playRound(computerSelection, playerSelections) {


            if (computerSelection == "Rock" && playerSelections == "Rock") {
                return "Its a Draw! Rock and Rock";
            } else if (computerSelection == "Paper" && playerSelections == "Paper") {
                return "Its a Draw! Paper and Paper";
            } else if (computerSelection == "Scissor" && playerSelections == "Scissor") {
                return "Its a Draw! Scissor and Scissor";
            } else if (computerSelection == "Rock" && playerSelections == "Paper") {
                return ("You Won! Paper beats Rock");
            } else if (computerSelection == "Rock" && playerSelections == "Scissor") {
                return "You Lose! Rock beats Scissor";
            } else if (computerSelection == "Paper" && playerSelections == "Rock") {
                return "You Lost! Paper beats Rock";
            } else if (computerSelection == "Paper" && playerSelections == "Scissor") {
                return "You Won! Scissor beats Paper";
            } else if (computerSelection == "Scissor" && playerSelections == "Rock") {
                return "You Won! Rock beats Scissor";
            } else {
                return "You lost! Scissor beats Paper!"
            }
        }

        console.log(playRound(computerSelection, playerSelections));
        checkVictory();
    }
}

game();