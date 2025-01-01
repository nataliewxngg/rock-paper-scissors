// VARIABLES
let humanScore = 0;
let computerScore = 0;

// FUNCTIONS
// generates the computer's choice between rock, paper, and scissors
function getComputerChoice() { 
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

// repeatedly inputs for the user's choice until valid
function getHumanChoice() { 
    let choice = prompt('Enter your choice: ');

    while (!(choice.toLowerCase() === "rock") &&
    !(choice.toLowerCase() === "paper") &&
        !(choice.toLowerCase() === "scissors")) {
            choice = prompt('Invalid input. Enter your choice: ');
    }
    
    return choice;
}

// plays and increments appropriate variables for 1 round of gameplay
// (5 rounds per game)
function playRound(humanChoice, computerChoice) { 
    if (humanChoice === computerChoice) console.log("It's a tie!");
    
    if ((humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
    }
}

// plays 5 rounds of rock paper scissors using playRound()
function playGame() { 
    for (let i = 0; i < 5; ++i) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    
    // outputs game results on round 5
    if (humanScore == computerScore) console.log('Its a tie!');
    else if (humanScore > computerScore) console.log('Victory! You beat the computer.');
    else console.log('You lost! Better luck next time.')
}

// MAIN
playGame();