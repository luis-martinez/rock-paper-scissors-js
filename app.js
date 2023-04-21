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

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

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

function play(playerSelection) {
    myComputerSelection = computerPlay();
    console.log('Computer selects: ' + myComputerSelection);
    console.log(playRound(playerSelection, myComputerSelection));
}

//  2.3
//  Add a div for displaying results and change all of your console.logs into DOM methods.
