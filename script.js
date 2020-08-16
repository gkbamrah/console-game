const choices = [
    'rock',
    'paper',
    'scissors'
];

let cScore = 0; //computer score
let pScore = 0; //player score
let winColor = 'green';
let loseColor = 'red';
let tieColor = 'black';

function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}
function changeScore(computerScore, playerScore) {
    const score = document.querySelector("h2");
    score.textContent = "Computer: " + computerScore + " - Player: " + playerScore;
}
function tieResult(playerChoice) {
    changeH3Text("It's a tie! You both chose " + playerChoice, tieColor);
}
function changeH3Text(text, color) {
    const result = document.querySelector("h3");
    result.textContent = text;
    result.style.color = color;
}

function changeH4Text(computerChoice) {
    const result = document.querySelector("h4");
    result.textContent = "Computer chose " + computerChoice;
}

function playRound(playerSelection, computerSelection) {
    const lowerCasePlayerSelection = playerSelection.toLowerCase();
    switch (lowerCasePlayerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                changeH4Text(computerSelection);
                changeH3Text("You win! Rock beats scissors", winColor);
                changeScore(cScore, ++pScore);
            } else if(computerSelection === 'paper') {
                changeH4Text(computerSelection);
                changeH3Text("You lose! Paper beats rock", loseColor);
                changeScore(++cScore, pScore);
            } else {
                changeH4Text(computerSelection);
                tieResult(lowerCasePlayerSelection);
            }
        break;
        case 'paper':
            if (computerSelection === 'scissors') {
                changeH4Text(computerSelection);
                changeH3Text("You lose! Scissors beats paper", loseColor);
                changeScore(++cScore, pScore);
            } else if(computerSelection === 'rock') {
                changeH4Text(computerSelection);
                changeH3Text("You win! Paper beats rock", winColor);
                changeScore(cScore, ++pScore);
            } else {
                changeH4Text(computerSelection);
                tieResult(lowerCasePlayerSelection);
            }
        break;
        case 'scissors':
            if (computerSelection === 'rock') {
                changeH4Text(computerSelection);
                changeH3Text("You lose! Rock beats scissors", loseColor);
                changeScore(++cScore, pScore);
            } else if(computerSelection === 'paper') {
                changeH4Text(computerSelection);
                changeH3Text("You win! Scissors beats paper", winColor);
                changeScore(cScore, ++pScore);
            } else {
                changeH4Text(computerSelection);
                tieResult(lowerCasePlayerSelection);
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