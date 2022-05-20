"use strict";
const scoreCard = document.querySelector(".score-card span");
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
const infoDiv = document.querySelector(".info");
const infoPara = infoDiv.querySelector("p");
const infoBtn = infoDiv.querySelector("button");

let playerhand;
let comphand;
let score = 0;
const data = localStorage.getItem("score");

scoreCard.textContent = data;
// scoreCard.textContent = score;

const computerhands = ["rock", "paper", "scissors"];

ruleBtn.addEventListener("click", function () {
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

close.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

infoBtn.addEventListener("mouseover", function () {
  infoBtn.classList.add("hover");
});

infoBtn.addEventListener("mouseout", function () {
  infoBtn.classList.remove("hover");
});

optionDiv.addEventListener("click", function (e) {
  const option = e.target.closest(".option");
  start.classList.add("hidden");
  game.classList.remove("hidden");

  let index = Math.floor(Math.random() * 3);
  playerhand = option.dataset.name;
  comphand = computerhands[index];
  let src = `/images/icon-${playerhand}.svg`;
  let compsrc = `/images/icon-${comphand}.svg`;

  playerOption.classList.add(playerhand);
  playerOptionImg.setAttribute("src", src);
  const compShowHand = function () {
    computerOption.classList.remove("comp-opt");
    computerOption.classList.add("opt");
    computerOption.classList.add(comphand);
    computerOptionImg.setAttribute("src", compsrc);
    console.log(comphand);
  };
  const displayInfo = function () {
    infoDiv.style.display = "block";

    if (playerhand === comphand) {
      infoPara.textContent = "draw";
      scoreCard.textContent = score;
    }

    if (playerhand === "rock") {
      if (comphand === "scissors") {
        infoPara.textContent = "you win";
        score++;
        scoreCard.textContent = score;
      }
      if (comphand === "paper") {
        infoPara.textContent = "you lose";
        if (score === 0) return;
        else score--;
        scoreCard.textContent = score;
      }
    }

    if (playerhand === "paper") {
      if (comphand === "rock") {
        infoPara.textContent = "you win";
        score++;
        scoreCard.textContent = score;
      }
      if (comphand === "scissors") {
        infoPara.textContent = "you lose";
        if (score === 0) return;
        else score--;
        scoreCard.textContent = score;
      }
    }

    if (playerhand === "scissors") {
      if (comphand === "paper") {
        infoPara.textContent = "you win";
        score++;
        scoreCard.textContent = score;
      }
      if (comphand === "rock") {
        infoPara.textContent = "you lose";
        if (score === 0) return;
        else score--;
        scoreCard.textContent = score;
      }
    }

    localStorage.setItem("score", score);
  };
  setTimeout(compShowHand, 1000);
  setTimeout(displayInfo, 1500);
});

infoBtn.addEventListener("click", function () {
  start.classList.remove("hidden");
  game.classList.add("hidden");
  infoDiv.style.display = "none";
  computerOption.classList.add("comp-opt");
  computerOption.classList.remove("opt");
  computerOption.classList.remove(comphand);
  computerOptionImg.setAttribute("src", "");
  playerOption.classList.remove(playerhand);
});

const remove = function () {
  localStorage.removeItem("score");
  scoreCard.textContent = score;
};

// remove();
