"use strict";
//Modal windows
// buttons
const instructionBtn = document.querySelector(".instruction");
const closeBtn = document.querySelector(".close-btn");
const setNameBtn = document.querySelector(".set-name");
const doneBtn = document.querySelector(".done-button");

//input elements
const inputName1 = document.getElementById("input-name-1");
const inputName2 = document.getElementById("input-name-2");

//elements
const playerName1 = document.querySelector(".player-name-0");
const playerName2 = document.querySelector(".player-name-1");

// eventlisteners

// instruction button listener
instructionBtn.addEventListener("click", function () {
  document.querySelector(".instructionel").classList.remove("hidden");
  document.querySelector(".instruction-content").classList.remove("hidden");
});
// close button listener to instruction modal
closeBtn.addEventListener("click", function () {
  document.querySelector(".instructionel").classList.add("hidden");
  document.querySelector(".instruction-content").classList.add("hidden");
});
// set name button listener
setNameBtn.addEventListener("click", function () {
  document.querySelector(".instructionel").classList.remove("hidden");
  document.querySelector(".set-name-content").classList.remove("hidden");
});
// Done button listener in set neme modal
doneBtn.addEventListener("click", function () {
  //closes the modal window
  document.querySelector(".instructionel").classList.add("hidden");
  document.querySelector(".set-name-content").classList.add("hidden");

  //   set the name
  playerName1.textContent =
    inputName1.value !== "" ? inputName1.value : "Player 1";
  playerName2.textContent =
    inputName2.value !== "" ? inputName2.value : "Player 2";

  //empty the input fields
  inputName1.value = "";
  inputName2.value = "";
});

// main game

// buttons
const rollBtn = document.querySelector(".roll-btn");
const holdBtn = document.querySelector(".hold-btn");
const resetBtn = document.querySelector(".reset");

// elements
const dice = document.querySelector(".dice");
let currentScoreEl0 = document.getElementById("current--0");
let currentScoreEl1 = document.getElementById("current--1");

//initial settings
let currentScore, currentPlayer, score, isGameOn;
currentScore = 0;
currentPlayer = 0;
score = [0, 0];
isGameOn = true;

const init = () => {
  currentScore = 0;
  currentPlayer = 0;
  score = [0, 0];
  isGameOn = true;

  document.querySelector(".player-container").classList.remove("hidden");
  document.querySelector(".action-btn-group").classList.remove("hidden");
  document.querySelector(".winner").classList.add("hidden");
  dice.classList.remove("hidden");

  document.getElementById("score--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;
};
init();
dice.classList.add("hidden");

// functions
const switchPlayer = () => {
  //reset value before switching to another player
  document
    .getElementById(`player--${currentPlayer}`)
    .classList.remove("active-player");
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  // switch PLayer
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  //display active player
  document
    .getElementById(`player--${currentPlayer}`)
    .classList.add("active-player");
};

// event listeners
rollBtn.addEventListener("click", () => {
  if (isGameOn) {
    // generates random dice between 1 and 6
    const randomDice = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove("hidden");
    dice.src = `assets/dice--${randomDice}.png`;

    if (randomDice !== 1) {
      currentScore += randomDice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
      //display active player
      document
        .getElementById(`player--${currentPlayer}`)
        .classList.add("active-player");
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener("click", () => {
  if (isGameOn) {
    score[currentPlayer] += currentScore;
    //score[0] = score[0] + currentScore
    document.getElementById(`score--${currentPlayer}`).textContent =
      score[currentPlayer];

    // if a player scores 20 he wins and game finishes
    // else switch players
    if (score[currentPlayer] >= 10) {
      isGameOn = false;
      document.querySelector(".player-container").classList.add("hidden");
      document.querySelector(".action-btn-group").classList.add("hidden");
      document.querySelector(".winner").classList.remove("hidden");
      dice.classList.add("hidden");

      document.querySelector(".win-msg").textContent = document.getElementById(
        `player-name-${currentPlayer}`
      ).textContent;
      //empty the input fields
      inputName1.value = "";
      inputName2.value = "";
    } else {
      switchPlayer();
    }
  }
});

//reset button
resetBtn.addEventListener("click", init);
