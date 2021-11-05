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


let pcspan = document.querySelector('#pcspan'); 
let plspan = document.querySelector('#plspan');


pcspan.appendChild(pcscore);

plspan.appendChild(plscore);


function updateScore(player, comp) {
    
let pcscore = document.createElement('div');

let plscore = document.createElement('div');

plscore.textContent = playerScore;
pcscore.textContent = computerScore;


}


function rockps(playerselection, computerselection) {
    
    


    if (computerselection === "Rock") {
        if (playerselection === "rock") {
            return;
        } else if (playerselection === "paper") {
            playerScore++; 
            return;
        } else if (playerselection === "scissors") {
            computerScore++;
            return;
        }
    } else if (computerselection === "Paper") {
        if (playerselection === "rock") {
            computerScore++;
            return;
        } else if (playerselection === "paper") {
           return;
        } else if (playerselection === "scissors") {
            playerScore++;
           return;
        }
    } else if (computerselection === "Scissors") {
        if (playerselection === "rock") {
            playerScore++;
            return;
        
        } else if (playerselection === "paper") {
            computerScore++;
            return;
        } else if (playerselection === "scissors") {
            return;
        }
    }
    updateScore(playerScore, computerScore);
    }

    const buttons = document.querySelectorAll('button');

        buttons.forEach((button) => {

            button.addEventListener('click', () => {
                /* console.log(button.id); */
                rockps(button.id, computerSelect())});

        });





     /*  let getselection = document.querySelector('button.id');
    if (getselection === 1) {
        playerselection = "rock";
    }
    else if (getselection === 2) {
        return "paper";
    }
    else if (getselection === 3) {
        return "scissors";
    }  */