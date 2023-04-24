console.log('Hello world');

const options = ['Rock', 'Paper', 'Scissors'];

// Capitalize the string, first letter only
let capitalize = myString => {
  myString = myString.toLowerCase();
  myString = myString.replace(/^\w/, (c) => c.toUpperCase())
  return myString;
};

// Check if the option enter by the user is valid (rock, paper, or scissors)
let validOption = option => options.includes(capitalize(option));

// Computer plays, return a random value either 'Rock', 'Paper', or 'Scissors'.
function computerPlay(){
  return options[Math.floor(Math.random()*options.length)];
}

// Play a round of the game
function playRound(playerSelection, computerSelection) {
  let myPlayerSelection = capitalize(playerSelection);
  let myComputerSelection = capitalize(computerSelection);

  let winner;

  // Messages
  let messagePlayerWins = `You win!, ${myPlayerSelection} beats ${myComputerSelection}.`;
  let messageComputerWins = `You loose!, ${myComputerSelection} beats ${myPlayerSelection}.`;
  let messageNone = 'No one wins!';

  // Check who is the winner
  if (myPlayerSelection === 'Rock' && myComputerSelection === 'Scissors') {
    winner = 'player';
  } else if (myPlayerSelection === 'Paper' && myComputerSelection === 'Rock'){
    winner = 'player';
  } else if (myPlayerSelection === 'Scissors' && myComputerSelection === 'Paper') {
    winner = 'player';
  } else if (myPlayerSelection === myComputerSelection){
    winner = 'none';
  }  else {
    winner = 'computer';
  }
 
  // If the winner is the computer add computerWins +1 to the computer score
  if (winner === 'computer'){
    computerWins++;
  }
  // If the winner is the player add playerWins +1 to the player score
  if (winner === 'player'){
    playerWins++;
  }

  // return who is the winner
  return (winner === 'player') ? messagePlayerWins : (winner === 'computer') ? messageComputerWins : messageNone;
}

// main function
// function game() {
//   let myPlayerSelection;
//   let myComputerSelection;

//   // Play 5 times the game
// //   for (le index = 0; index < 5; index++) {
//     myComputerSelection = computerPlay();
//     myPlayerSelection = window.prompt('Choose an option: Rock, Paper or Scissors.');

//     // Check if it is not a valid option, then ask again for the option, 
//     //  until is valid
//     while (!validOption(myPlayerSelection)) {
//       myPlayerSelection = window.prompt('Error! Choose a valid option: Rock, Paper or Scissors.');
//     }

//     // Play a round
//     console.log(playRound(myPlayerSelection, myComputerSelection));
// //   }
// }

// game();

// Selects the buttons by the id
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

// Selects the container of the options
let option = document.querySelector('.option');
// Create a new element to display the results
const results = document.createElement('div');
// Create a new element to display the score
const score = document.createElement('div');
// Create a new element to display the winner of the game
const winnerGame = document.createElement('div');

// Declare variables computer and player wins
let computerWins = 0;
let playerWins = 0;
// Declare variable end of the game
let endGame = false;

// Add event listeners for the options
rock.addEventListener('click', (e) => {
    // game('Rock');
    play(e.target.innerHTML);
}); 
paper.addEventListener('click', (e) => {
    // game('Paper');
    play(e.target.innerHTML);
}); 
scissors.addEventListener('click', (e) => {
    // game('Scissors');
    play(e.target.innerHTML);
}); 

// Play the game when the user selects an option
function play(playerSelection) {
  // Reset variables when the game is over
  if (endGame) {
    playerWins = 0;
    computerWins = 0;
    endGame = false;
    // Removes the HTML, DOM code of the winner of the game
    winnerGame.remove();
  }

  // Computer plays
  myComputerSelection = computerPlay();
  // Add text and HTML code in the results
  results.textContent = 'Computer selects: ' + myComputerSelection;
  results.innerHTML += '<br>' + playRound(playerSelection, myComputerSelection);
  // Show the results after the container 'option' in a new div 'results'
  option.parentNode.insertBefore(results, option.nextSibling);
  showScore();
}

//Show the score of the game and the winner
function showScore(){
  // Add text to the score
  score.textContent = 'Score: ' + 'Player ' + playerWins + ' - ' + 'Computer ' + computerWins;
  // Show the score after the div 'results' in a new div 'score'
  results.parentNode.insertBefore(score, results.nextSibling);

  // If the player or the computer wins this game, show the winner
  if ((playerWins == 5) || (computerWins == 5)){
    // Add the content of the winner to the winnerGame variable (div)
    if (playerWins == 5) {
      winnerGame.textContent = 'PLAYER WINS THIS GAME!!!';
    }
    if (computerWins == 5){
      winnerGame.textContent = 'COMPUTER WINS THIS GAME!!!';
    }
    // End the game
    endGame = true;
    
    // Show the winner after the div 'score' in a new div 'winnerGame'
    score.parentNode.insertBefore(winnerGame, score.nextSibling);
  }
}
