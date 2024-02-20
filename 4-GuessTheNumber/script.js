const form = document.querySelector('.form');
const submit = document.querySelector('#subt');
let input = document.querySelector('#guessField');

let guessRemaining_content = Number(
  document.querySelector('.lastResult').innerHTML
);
let guessRemaining = document.querySelector('.lastResult');

let guessRemainings = 10;
previousGuesses = [];
isPlayable = true;

function numGussed (num) {
   if (Number(input.value) < randomNumber) {
    document.querySelector('.lowOrHi').innerHTML = `<h2>Number is lower<h2/>`
  } else if (Number(input.value) > randomNumber) {
    document.querySelector('.lowOrHi').innerHTML = `<h2>Number is higher<h2/>`
  } if (Number(input.value) === randomNumber) {
    alert ("You Gussed Right");
    restart() }
}

function inputSubmited() {
  if (guessRemainings >= 1) {
    guessRemainings--;
    document.querySelector('.lastResult').innerHTML = guessRemainings;
    previousGuesses.push(`${input.value}`)
    console.log(typeof(Number(input.value)))
    document.querySelector('.guesses').innerHTML = ` ${previousGuesses}`
    numGussed(Number(input.value))
    input.value = ""    
  } else {
    restart()
  }
}

function restart () {
   guessRemainings = 10;
   previousGuesses = [];
   isPlayable = true;
}

randomNumber = Math.floor(Math.random() * 100 + 1);

console.log(randomNumber);
console.log(guessRemaining_content);

submit.addEventListener('click', function (e) {
  e.preventDefault();
  inputSubmited();

  let inputField = document.querySelector('#guessField');
});

