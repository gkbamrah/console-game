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

const buttons = document.querySelectorAll('input');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      playRound(button.id, computerPlay());
    });
  });

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    })
}
function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}
function changeScore(computerScore, playerScore) {
    const score = document.querySelector("h2");
    score.textContent = "Computer: " + computerScore + " - You: " + playerScore;
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



function checkGameOver() {
    if(pScore == 5) {
            const titleText = document.querySelector("h1");
            titleText.textContent = "Game over! You win!";
            disableButtons();
        }   
    if(cScore == 5) {
        const titleText = document.querySelector("h1");
        titleText.textContent = "Game over! Computer wins!";
        disableButtons();
    }
}

function noTieProc(roundResult, resultTextColor, compScore, playScore) {

    changeH3Text(roundResult, resultTextColor);
    changeScore(compScore, playScore);
    checkGameOver();
}

function playRound(playerSelection, computerSelection) {
    changeH4Text(computerSelection);
    const lowerCasePlayerSelection = playerSelection.toLowerCase();
    switch (lowerCasePlayerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                noTieProc("You win! Rock beats scissors", winColor, cScore, ++pScore);
            } else if(computerSelection === 'paper') {
                noTieProc("You lose! Paper beats rock", loseColor, ++cScore, pScore);
            } else {
                tieResult(lowerCasePlayerSelection);
            }
        break;
        case 'paper':
            if (computerSelection === 'scissors') {
                noTieProc("You lose! Scissors beats paper", loseColor, ++cScore, pScore);
                
            } else if(computerSelection === 'rock') {
                noTieProc("You win! Paper beats rock", winColor, cScore, ++pScore);

            } else {
  
                tieResult(lowerCasePlayerSelection);
            }
        break;
        case 'scissors':
            if (computerSelection === 'rock') {
                noTieProc("You lose! Rock beats scissors", loseColor, ++cScore, pScore);

            } else if(computerSelection === 'paper') {
                noTieProc("You win! Scissors beats paper", winColor, cScore, ++pScore);

            } else {
     
                tieResult(lowerCasePlayerSelection);
            }
        break;
        default:
            return "Invalid input. Computer wins by default"

    }   
}

