console.log("hello world!")

//1. create array with rps options.
//2. create function with random computer choice with array.
//3. write function that plays single round of rps, each round you return a result like "you win x beats y".
//4. write new function called game which plays 5 rounds then announces winner at the end.

//1. 
let options = ['rock', 'paper', 'scissors'];

//2.
function randomComputerSelection(arr) {
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}

function getPlayerSelection(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock? Paper? Or Scissors?");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

//3. 
//player and computer selection variables, function that compares two parameters and returns result, result announcement, function that capitalises what pl and com selected


function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'paper' && computerSelection == 'rock' ||
    playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'player';
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors' ||
    computerSelection == 'paper' && playerSelection == 'rock' ||
    computerSelection == 'scissors' && playerSelection == 'paper'){
        return 'computer';
    }
}

function capitalise(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function result(playerSelection, computerSelection) {
    const getRound = round(playerSelection, computerSelection);
    if (getRound == 'tie') {
        console.log("It's a tie!");
    }
    else if (getRound == 'player') {
        console.log(`Player win! ${capitalise(playerSelection)} beats ${capitalise(computerSelection)}!`);
    }
    else if (getRound == 'computer') {
        console.log(`Computer win! ${capitalise(computerSelection)} beats ${capitalise(playerSelection)}!`);
    }
    else {console.log("Oops! Please try again...")};
}

//4. 
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerSelection();
        const computerSelection = randomComputerSelection(options);
        result(playerSelection, computerSelection);
        if (round(playerSelection, computerSelection) == 'player') {
            playerScore++;
        }
        else if (round(playerSelection, computerSelection) == 'computer') {
            computerScore++;
        }
    }
    if (playerScore === computerScore) {
        console.log("Tie! No winner or loser!")
    }
    else if (playerScore > computerScore) {
        console.log("Player win! Congratulations!!")
    }
    else {console.log("Computer win! Too bad! You lose!!")}
}

game();

