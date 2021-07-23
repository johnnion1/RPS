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

function rockps() {
    
}