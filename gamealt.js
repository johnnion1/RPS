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
    let playerSelection = prompt("Choose R, P or S!");
    return playerSelection.toLowerCase() 
}

function parseWinner() {
   let computerPlay= computerSelect();
   // console.log(computerPlay);
   let playerPlay = playerSelect();
 //  console.log(playerPlay);

    if (computerPlay === "Rock") {
        if (playerPlay === "rock") {
            console.log("It's a draw, Rock and Rock.");
        } else if (playerPlay === "paper") {
            console.log("You win! Paper beats Rock!");
        } else if (playerPlay === "scissors") {
            console.log("You loose! Rock beats Scissors!");
        }
    } else if (computerPlay === "Paper") {
        if (playerPlay === "rock") {
            console.log("You loose! Paper beats Rock!");
        } else if (playerPlay === "paper") {
            console.log("It's a draw, Paper and Paper.");
        } else if (playerPlay === "scissors") {
            console.log("You win! Scissors beats Paper!");
        }
    } else if (computerPlay === "Scissors") {
        if (playerPlay === "rock") {
            console.log("You win! Rock beats Scissors!");
        } else if (playerPlay === "paper") {
            console.log("You loose! Scissors beats Paper!");
        } else if (playerPlay === "scissors") {
            console.log("It's a draw, scissors and scissors.");
        }
    }
    }
