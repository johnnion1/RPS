function computerSelect() {

    let computerChoice = Math.random()*100;
    if (computerChoice >= 66) {
        return "Rock";
    } else if (computerChoice >= 33) {
        return "Paper";
    } else if (computerChoice >= 0) {
        return "Scissors";
    }
}


    
let playerScore = 0;
let computerScore = 0;



const pcspan = document.querySelector('#pcspan'); 
const plspan = document.querySelector('#plspan');

let pcscore = document.createElement('div');
let plscore = document.createElement('div');

pcspan.appendChild(pcscore);
plspan.appendChild(plscore);


function updateScore(player, comp) {
    if (playerScore === 5) {

        messageBoard.textContent = "Okay Player win!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        messageBoard.textContent = "Okay Computer wins!";
        playerScore = 0;
        computerScore = 0;
    }
    plscore.textContent = player;
    pcscore.textContent = comp;
}

const messageBoard = document.querySelector('#messageBoard');

messageBoard.style.height = '150px';
messageBoard.style.width = '400px';
messageBoard.style.backgroundColor = 'pink';

function rockps(playerselection, computerselection) {

    if (computerselection === "Rock") {
        if (playerselection === "rock") {
            messageBoard.textContent = "It's a draw, Rock and Rock.";
            return;
        } else if (playerselection === "paper") {
            playerScore++; 
            messageBoard.textContent = "You win! Paper beats Rock!";
            return;
        } else if (playerselection === "scissors") {
            computerScore++;
            messageBoard.textContent = "You loose! Rock beats Scissors!";
            return;
        }
    } else if (computerselection === "Paper") {
        if (playerselection === "rock") {
            computerScore++;
            messageBoard.textContent = "You loose! Paper beats Rock!";
            return;
        } else if (playerselection === "paper") {
            messageBoard.textContent = "It's a draw, Paper and Paper.";
           return;
        } else if (playerselection === "scissors") {
            playerScore++;
            messageBoard.textContent = "You win! Scissors beats Paper!";
           return;
        }
    } else if (computerselection === "Scissors") {
        if (playerselection === "rock") {
            playerScore++;
            messageBoard.textContent = "You win! Rock beats Scissors!";
            return;
        } else if (playerselection === "paper") {
            computerScore++;
            messageBoard.textContent = "You loose! Scissors beats Paper!";
            return;
        } else if (playerselection === "scissors") {
            messageBoard.textContent = "It's a draw, scissors and scissors.";
            return;
        }
    }
    }

    const buttons = document.querySelectorAll('button');

        buttons.forEach((button) => {

            button.addEventListener('click', () => {
                /* console.log(button.id); */
                rockps(button.id, computerSelect());
                updateScore(playerScore, computerScore);
            });
        });
