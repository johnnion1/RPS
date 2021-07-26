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

function playerSelect() {  // PLAYER SRELECT!!
    let playerSelection = prompt("Choose Rock, Paper or Scissors!");
    return playerSelection.toLowerCase() 
}


//loop the rockps(), add two counters = 0, if return contains substring win: repeat until one counter reaches 5, gratulate winner
function game() { 

    for(; playerScore < 5 || computerScore < 5;) {
        rockps(playerSelect(), computerSelect());
        console.log(playerScore, computerScore);
    
    }

}
function rockps(playerselection, computerselection) {

    let playerScore = 0;
    let computerScore = 0;

    if (computerselection === "Rock") {
        if (playerselection === "rock") {
            console.log("It's a draw, Rock and Rock.");
        } else if (playerselection === "paper") {
            playerScore++;
           console.log("You win! Paper beats Rock!");
        } else if (playerselection === "scissors") {
            computerScore++;
           console.log("You loose! Rock beats Scissors!");
        }
    } else if (computerselection === "Paper") {
        if (playerselection === "rock") {
            computerScore++;
           console.log("You loose! Paper beats Rock!");
        } else if (playerselection === "paper") {
           console.log("It's a draw, Paper and Paper.");
        } else if (playerselection === "scissors") {
            playerScore++;
           console.log("You win! Scissors beats Paper!");
        }
    } else if (computerselection === "Scissors") {
        if (playerselection === "rock") {
            playerScore++;
           console.log("You win! Rock beats Scissors!");
        } else if (playerselection === "paper") {
            computerScore++;
           console.log("You loose! Scissors beats Paper!");
        } else if (playerselection === "scissors") {
           console.log("It's a draw, scissors and scissors.");
        }
    }
  //  if (playerScore > 3) {alert("WINNER!!!!!!");}
    }
