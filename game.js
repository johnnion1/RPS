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


//loop the rockps(), add two counters = 0, if return contains substring win: repeat until one counter reaches 5, gratulate winner  (no change to earlier rockps() function version)
//


function gaem() {
    let playerScore = 0;
    let computerScore = 0;
    let i = 1;
    while (i < 6) {
       /* console.log("first i : " + i); */
       let play = rockps(playerSelect(), computerSelect());
        if (play === 1) {
           
            playerScore++;
            /* 
            console.log("i: " + i); */
            console.log("Player score: " + playerScore + "   Computer score: " + computerScore + "    Rounds left: " + (5 - i));
            i++;
        } else if (play === 2) {
         
            computerScore++;
           /* 
            console.log("i: " + i); */
            console.log("Player score: " + playerScore + "   Computer score: " + computerScore + "    Rounds left: " + (5 - i));
            i++;
        } else if (play === 3) {
            console.log("Player score: " + playerScore + "   Computer score: " + computerScore + "    Rounds left: " + (5 - i));
            i++;
          }
        }
    if (playerScore > computerScore) {
        alert("JOHNNY IS THE WINNNNNER!!!"); 
        console.log("YOU ARE THE WIEner");
    } else if (playerScore === computerScore) {
        alert("Draw your attention!"); 
        console.log("DRAW");
    } else {
        alert("Better success next time!!"); 
        console.log("lost :(");
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



      /*  function initGame() {

    for(i = 0; i === 5; i++) {
        rockps(playerSelect(), computerSelect());    
   if (rockps(playerSelect(), computerSelect()) === 1) {
    playerScore++;
    console.log("Player score: " + playerScore + "\nComputer score: " + computerScore);
   } else if (rockps(playerSelect(), computerSelect()) === 2) {
    computerScore++;
    console.log("Player score: " + playerScore + "\nComputer score: " + computerScore);
   } else if (rockps(playerSelect(), computerSelect()) === 0) {
    console.log("Player score: " + playerScore + "\nComputer score: " + computerScore);
   }
}} */


        /* for(let i = 0; i === 5; i++) {
            alert("stock");
            rockps(playerSelect(), computerSelect());   */