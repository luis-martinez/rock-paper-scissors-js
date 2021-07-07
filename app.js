console.log('Hello world');

const options = ['Rock', 'Paper', 'Scissors'];

let capitalize = myString => {
  myString = myString.toLowerCase();
  myString = myString.replace(/^\w/, (c) => c.toUpperCase())
  return myString;
};

// Computer plays, return a random value either 'Rock', 'Paper', or 'Scissors'.
function computerPlay(){
  return options[Math.floor(Math.random()*options.length)];
}

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
  } else if (myPlayerSelection === 'Papper' && myComputerSelection === 'Rock'){
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

//console.log(computerPlay());

const playerSelection = "papEr";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

