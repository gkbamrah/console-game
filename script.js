const choices = [
    'rock',
    'paper',
    'scissors'
];
function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    const lowerCasePlayerSelection = playerSelection.toLowerCase();
    switch (lowerCasePlayerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                return "You win! Rock beats scissors";
            } else if(computerSelection === 'paper') {
                return "You lose! Paper beats rock"
            } else {
                return "It's a tie! You both chose " + lowerCasePlayerSelection;
            }
        break;
        case 'paper':
            if (computerSelection === 'scissors') {
                return "You lose! Scissors beats paper";
            } else if(computerSelection === 'rock') {
                return "You win! Paper beats rock"
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
            return "Invalid input"
    }   
}

function game() {
    let response = "";
    let computerChoice = "";
    for(i = 0; i < 5; i++) {
       response = prompt("Make your move! [rock][paper][scissors]"); 
       console.log("You chose " + response + "...");
        computerChoice = computerPlay();
        console.log("The computer chose " + computerChoice + "...");
        console.log(playRound(response, computerChoice));
    }
}