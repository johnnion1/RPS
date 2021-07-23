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
    let playerSelection = prompt("Choose Rock, Paper or Scissors!");
    return playerSelection.toLowerCase() 
}

function rockps(playerselection, computerselection) {

         if (computerselection === "Rock") {
             if (playerselection === "rock") {
                 return("It's a draw, Rock and Rock.");
             } else if (playerselection === "paper") {
                return("You win! Paper beats Rock!");
             } else if (playerselection === "scissors") {
                return("You loose! Rock beats Scissors!");
             }
         } else if (computerselection === "Paper") {
             if (playerselection === "rock") {
                return("You loose! Paper beats Rock!");
             } else if (playerselection === "paper") {
                return("It's a draw, Paper and Paper.");
             } else if (playerselection === "scissors") {
                return("You win! Scissors beats Paper!");
             }
         } else if (computerselection === "Scissors") {
             if (playerselection === "rock") {
                return("You win! Rock beats Scissors!");
             } else if (playerselection === "paper") {
                return("You loose! Scissors beats Paper!");
             } else if (playerselection === "scissors") {
                return("It's a draw, scissors and scissors.");
             }
         }
         }
