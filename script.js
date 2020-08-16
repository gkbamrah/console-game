const choices = [
    'rock',
    'paper',
    'scissors'
];
function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    //if(playerSelection == null) {
        
    //}
    const lowerCasePlayerSelection = playerSelection.toLowerCase();
    switch (lowerCasePlayerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                console.log("You win! Rock beats scissors");
            } else if(computerSelection === 'paper') {
                console.log("You lose! Paper beats rock");
            } else {
                console.log("It's a tie! You both chose " + lowerCasePlayerSelection);
            }
        break;
        case 'paper':
            if (computerSelection === 'scissors') {
                console.log("You lose! Scissors beats paper");
            } else if(computerSelection === 'rock') {
                console.log("You win! Paper beats rock");
            } else {
                return "It's a tie! You both chose " + lowerCasePlayerSelection;
            }
        break;
        case 'scissors':
            if (computerSelection === 'rock') {
                return "You lose! Rock beats scissors";
            } else if(computerSelection === 'paper') {
                return "You win! Scissors beats paper"
            } else {
                return "It's a tie! You both chose " + lowerCasePlayerSelection;
            }
        break;
        default:
            return "Invalid input. Computer wins by default"
    }   
}


const buttons = document.querySelectorAll('input');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      playRound(button.id, computerPlay());
    });
  });
//
// function game() {
//     let response = "";
//     let computerChoice = "";
//     for(i = 0; i < 5; i++) {
//        response = prompt("Make your move! [rock] [paper] [scissors]"); 
//        if(response == null) {
//            console.log("Game cancelled");
//            return;
//        }
//        console.log("You chose " + response + "...");
//         computerChoice = computerPlay();
//         console.log("The computer chose " + computerChoice + "...");
//         console.log(playRound(response, computerChoice));
//     }
// }