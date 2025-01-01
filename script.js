// VARIABLES
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const btns = document.querySelectorAll("div > button");
const body = document.querySelector("body");

const resultsDiv = document.querySelector("#results");

const roundCount = document.createElement("p");
const score = document.createElement("h3");
const roundResults = document.createElement("p");
const choices = document.createElement("p");
const gameResults = document.createElement("h3");
roundResults.textContent = "Press a button to start!"

score.style["margin-top"] = 0;

resultsDiv.appendChild(roundResults);
resultsDiv.appendChild(choices);
resultsDiv.appendChild(gameResults);

// FUNCTIONS

// resets appropriate variables to prepare for new game
function reset() {
    humanScore = computerScore = roundsPlayed = 0;
}

// generates the computer's choice between rock, paper, and scissors
function getComputerChoice() { 
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

// sets the text content of the gameResults p tag to reflect results
// (called on round 5)
function setGameResults() {
    if (humanScore > computerScore) gameResults.textContent = 'Victory! You beat the computer.';
    else if (humanScore < computerScore) gameResults.textContent = 'You lost! Better luck next time.';
    else gameResults.textContent = "Tied game!"
}

// plays and increments appropriate variables for 1 round of gameplay
// (5 rounds per game)
function playRound(humanChoice, computerChoice) { 

    // only display game results on round 5 - remove on new game
    if (roundsPlayed == 0) {
        resultsDiv.removeChild(gameResults);
    }
    ++roundsPlayed;
    roundCount.textContent = `Round ${roundsPlayed}`;

    choices.innerHTML = `You: ${humanChoice}<br>Computer:  ${computerChoice}`;

    // tied round
    if (humanChoice === computerChoice) {
        roundResults.textContent = "It's a tie!";
        score.textContent = `${humanScore} - ${computerScore}`

        if (roundsPlayed == 5) {
            setGameResults();
            resultsDiv.appendChild(gameResults);
            reset();
        }
        return;
    } 
    
    // won round
    if ((humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')) {
        roundResults.textContent = `You win! ${humanChoice[0].toUpperCase() + humanChoice.substring(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.substring(1)}.`;
        ++humanScore;
    } else { // lost round
        roundResults.textContent = `You lose! ${computerChoice[0].toUpperCase() + computerChoice.substring(1)} beats ${humanChoice[0].toUpperCase() + humanChoice.substring(1)}.`;
        ++computerScore;
    }
    score.textContent = `${humanScore} - ${computerScore}`

    if (roundsPlayed == 5) {
        setGameResults();
        resultsDiv.appendChild(gameResults);
        reset();
    }
}

// MAIN
btns.forEach((btn) => {
    // play 1 round of rock paper scissors everytime a button (rock/paper/scissors) is clicked
    btn.addEventListener("click", (e) => {
        playRound(e.target.textContent, getComputerChoice());
    });

    // only append the nodes score and roundCount after a button is clicked
    btn.addEventListener("click", (e) => {
        body.insertBefore(score, document.querySelector("#buttons"));
        body.insertBefore(roundCount, score);
    }, { once: true });
});
