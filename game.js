function computerSelect() {

    let computerChoice = Math.random()*100;
    if (computerChoice >= 66) {

     //  console.log("rOCk");
        return "Rock";
    } else if (computerChoice >= 33) {

      // console.log("pAPer");
        return "Paper";
    } else if (computerChoice >= 0) {

     //  console.log("scISSsors");
        return "Scissors";
    }
}

function playerSelect() { 
    let playerSelection = document.querySelector('button.id');
    if (playerSelection === 1) {
        return "rock";
    }
    else if (playerSelection === 2) {
        return "paper";
    }
    else if (playerSelection === 3) {
        return "scissors";
    } 
}

function rockps(playerselection, computerselection) {

    let playerScore = 0;
    let computerScore = 0;

    if (computerselection === "Rock") {
        if (playerselection === "rock") {
            console.log("It's a draw, Rock and Rock.");
            return(3);
        } else if (playerselection === "paper") {
            playerScore++;
           console.log("You win! Paper beats Rock!");
           return(1);
        } else if (playerselection === "scissors") {
            computerScore++;
           console.log("You loose! Rock beats Scissors!");
           return(2);
        }
    } else if (computerselection === "Paper") {
        if (playerselection === "rock") {
            computerScore++;
           console.log("You loose! Paper beats Rock!");
           return(2);
        } else if (playerselection === "paper") {
           console.log("It's a draw, Paper and Paper.");
           return(3);
        } else if (playerselection === "scissors") {
            playerScore++;
           console.log("You win! Scissors beats Paper!");
           return(1);
        }
    } else if (computerselection === "Scissors") {
        if (playerselection === "rock") {
            playerScore++;
           console.log("You win! Rock beats Scissors!");
           return(1);
        } else if (playerselection === "paper") {
            computerScore++;
           console.log("You loose! Scissors beats Paper!");
           return(2);
        } else if (playerselection === "scissors") {
           console.log("It's a draw, scissors and scissors.");
           return(3);
        }
    }
    }
