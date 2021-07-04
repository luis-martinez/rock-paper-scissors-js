console.log('Hello world');

const options = ['Rock', 'Paper', 'Scissors'];

// Computer plays, return a random value either 'Rock', 'Paper', or 'Scissors'.
function computerPlay(){
  return options[Math.floor(Math.random()*options.length)];
}

console.log(computerPlay());