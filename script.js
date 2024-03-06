"use strict";

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
