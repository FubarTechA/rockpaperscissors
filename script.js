"use strict";
const ruleBtn = document.querySelector(".rules-btn");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
const optionDiv = document.querySelector(".opt-div");
const start = document.querySelector(".start");
const game = document.querySelector(".game");
const playerOption = document.querySelector(".player-opt");
const computerOption = document.querySelector(".computer-opt");
const playerOptionImg = playerOption.querySelector("img");
const computerOptionImg = computerOption.querySelector("img");
// console.log(ruleBtn);

const computerhands = ["rock", "paper", "scissors"];
let index = Math.floor(Math.random() * 3);

let hand;
ruleBtn.addEventListener("click", function () {
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

close.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

optionDiv.addEventListener("click", function (e) {
  const option = e.target.closest(".option");
  start.classList.add("hidden");
  game.classList.remove("hidden");
  let playerhand = option.dataset.name;
  let src = `/images/icon-${playerhand}.svg`;
  console.log(src);
  playerOption.classList.add(playerhand);
  playerOptionImg.setAttribute("src", src);
  const compShowHand = function () {
    let comphand = computerhands[index];
    let compsrc = `/images/icon-${comphand}.svg`;
    computerOption.classList.remove("comp-opt");
    computerOption.classList.add("opt");
    computerOption.classList.add(comphand);
    computerOptionImg.setAttribute("src", compsrc);
  };
  setTimeout(compShowHand, 1000);
});
