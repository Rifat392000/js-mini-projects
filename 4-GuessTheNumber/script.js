let randomNumber = parseInt(Math.random() * 100 + 1);
//console.log(randomNumber);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let numGuess = 1;

let playGame = true;

let checker = false;


function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    //console.log(randomNumber);
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    lowOrHi.innerHTML ='';
    userInput.removeAttribute('disabled');
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
    // Given: <div id="div1" disabled width="200px">
   //document.getElementById("div1").removeAttribute("disabled");
  // Now: <div id="div1" width="200px">
    startOver.removeChild(p);
    playGame = true;

  });
}


function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.innerHTML = `<span id="newGame">Start new Game</span>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}




function displayMessage(message) {
  lowOrHi.innerHTML = `<span>${message}</span>`;
}



function checkGuess(guess) {
  if (guess === randomNumber) {
    checker = true;
    displayMessage(`Cool you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  remaining.innerHTML = `${10 - numGuess} `;
  numGuess++;
}


function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
      checkGuess(guess);
      displayGuess(guess);
      if (numGuess === 11) {
        if(checker)
        {
            endGame();
            checker = false;
        }
        else{
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
      
    }
  }
}


if (playGame) {
  submit.addEventListener('click',  (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
