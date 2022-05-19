"use strict";
const ruleBtn = document.querySelector(".rules-btn");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
const optionDiv = document.querySelector(".opt-div");
const start = document.querySelector(".start");
const game = document.querySelector(".game");
// console.log(ruleBtn);

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
});
