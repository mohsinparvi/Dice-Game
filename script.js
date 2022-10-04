'use strict';

// Selecting Element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Condition.
score0El.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');

//Dice rolling functionality

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore = 0;
  currentScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  //1- Generating new number;
  const dice = Math.trunc(Math.random() * 6) + 1;
  //   const dice = Math.trunc(math.random() * 6) + 1;
  console.log(dice);

  //2- Display Dice

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3- check for roll 1: if true,
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0EL.textContent = currentScore;
  } else {
    // switched the player
    // document.classList.add('player--acitve');
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  //1- add current score to active player's score
  score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  //2. check if the player scores>=100 then finished the game
  if (score[activePlayer] >= 10) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');

    // document.querySelector(`.player--${activePlayer}`).textContent = 'winner';
  } else {
    switchPlayer();
  }
  //3. switched the player
});
