'use strict';

// Selecting elements and store them into variables 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1E1 = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold'); 


// Setting initial scores to 0 and hide the dice before starting the game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


// Scores that accumulate through the whole game (total to reach 100)
const scores = []
// Scores that accumulate from each dice roll in one single run
let currentScore = 0;
// Used to follow which player is playing
let activePlayer = 0;


// Rolling dice logic
btnRoll.addEventListener('click', function () {

    // Generate a random dice number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display the dice img accordingly to the random dice number
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
        // Add dice number to the current score that accumulate on each dice roll
        currentScore = currentScore + dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

    } else {
        // Selecting the current player, which at this point has not swtich yet, and bring his score back to 0
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        // Then we switch player, toggling from player 0 (Player 1) to player 1 (Player 2) or vise versa
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});