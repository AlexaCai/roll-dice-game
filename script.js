'use strict';

// Selecting elements and store them into variables 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const player0Name = document.querySelector('#name--0');
const player1Name = document.querySelector('#name--1');
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
let scores = [0, 0];
// Scores that accumulate from each dice roll in one single run
let currentScore = 0;
// Used to follow which player is playing
let activePlayer = 0;
// Used to track when the game is on vs when its finished (after a user won, the game is set to false/finished)
let playing = true;


// When a player get 1 on the dice, we switch player through this function
const switchPlayer = function () {
    // Selecting the current player, which at this point has not swtich yet, and bring his current run score back to 0
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    // Switch player, toggling from player0 (Player 1) to player1 (Player 2) or vise versa
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


const resetGame = function () {
    diceEl.classList.add('hidden');
    scores = [0, 0];
    currentScore = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1E1.textContent = 0;
    player0Name.innerHTML = 'Player 1';
    player1Name.innerHTML = 'Player 2';
    if (playing && activePlayer !== 0) {
        resetOnFirstPlayer();
    }
    if (!playing) {
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
        resetOnFirstPlayer();
    }
    playing = true
}


// Function used to bring the game to the first player when reset button is clicked
const resetOnFirstPlayer = function () {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    document.querySelector(`.player--0`).classList.add('player--active');
    activePlayer = 0;
};


// Rolling the dice logic
btnRoll.addEventListener('click', function () {
    if (playing) {

        // Generate a random dice number
        const dice = Math.trunc(Math.random() * 6) + 1;

        // Display the dice img according to the random dice number
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            // Add dice number to the current score that accumulates on each dice roll
            currentScore = currentScore + dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

        } else {
            switchPlayer();
        };
    };
});


btnHold.addEventListener('click', function () {
    if (playing) {

        // Add the current score accumulated during a single run to the overall score of the active player
        scores[activePlayer] = scores[activePlayer] + currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        // If score is at least 100, active player wins
        if (scores[activePlayer] >= 100) {
            // Set the game to false and terminates it, thus desactivating 'roll the dice' and 'hold' buttons
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`#name--${activePlayer}`).innerHTML = 'Winner! <br> 🎉🎉🎉';
            document.querySelector(`#score--${activePlayer}`).textContent = '';
            diceEl.classList.add('hidden');

        } else {
            // If score is not at least 100, switch to the other player
            switchPlayer();
        };
    };
});


btnNew.addEventListener('click', function () {
    resetGame();
});