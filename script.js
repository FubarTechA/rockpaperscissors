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
const data = localStorage.getItem("score");
if (!data) {
  score = 0;
} else score = data;

scoreCard.textContent = score;
// scoreCard.textContent = score;

const computerhands = ["rock", "paper", "scissors"];

// DISPLAYING THE MODAL
ruleBtn.addEventListener("click", function () {
  overlay.classList.remove("hidden");
});

// HIDING THE MODAL
overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

close.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

// CREATING THE HOVER EFFECT ON THE INFO BUTTON
infoBtn.addEventListener("mouseover", function () {
  infoBtn.classList.add("hover");
});

infoBtn.addEventListener("mouseout", function () {
  infoBtn.classList.remove("hover");
});

optionDiv.addEventListener("click", function (e) {
  const option = e.target.closest(".option");

  // DISPLAYING THE GAME PAGE
  start.classList.add("hidden");
  game.classList.remove("hidden");

  // CREATING A RANDOM INDEX BETWEEN 0-2
  let index = Math.floor(Math.random() * 3);

  // SELECTING THE PLAYER HAND USING A DATA PROPERTY
  playerhand = option.dataset.name;

  // SELECTING PLAYER HAND RANDOMLY FROM THE computerhands ARRAY
  comphand = computerhands[index];

  // CREATING SRC FOR IMAGES BASED ON SELECTED HAND
  let src = `/images/icon-${playerhand}.svg`;
  let compsrc = `/images/icon-${comphand}.svg`;

  // ADDING THE CLASS BASED ON THE PLAYERHAND AND SETTING ITS SRC ATTRIBUTE
  playerOption.classList.add(playerhand);
  playerOptionImg.setAttribute("src", src);

  // FUNCTION FOR DISPLAYING THE COMP HAND
  const compShowHand = function () {
    // REMOVING THE CLASS OF COMP-OUT
    computerOption.classList.remove("comp-opt");

    // ADDING THE OPT CLASS
    computerOption.classList.add("opt");

    // ADDING THE CLASS BASED ON THE COMPHAND AND SETTING ITS SRC ATTRIBUTE
    computerOption.classList.add(comphand);
    computerOptionImg.setAttribute("src", compsrc);
  };

  // FUNCTION TO DISPLAY THE INFO DIV
  const displayInfo = function () {
    infoDiv.style.display = "block";

    // THE CORE GAME LOGIC  AND INCREMENTING AND DECREMMENTING THE SCORE BASED ON WHO WINS, THEN SETTING THE scoreCard.textContent TO THAT SCORE

    if (playerhand === comphand) {
      infoPara.textContent = "draw";
      // scoreCard.textContent = score;
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

    // STORING THE SCORE IN LOCAL STORAGE SO THAT IT PERSIST AFTER RELOAD
    localStorage.setItem("score", score);
  };

  // CALLING THE FUNCTIONS ABOVE WITH A setTimeout IN ORDER TO CREATE DELAYS, NECESSARY FOR THE GAME UX
  setTimeout(compShowHand, 1000);
  setTimeout(displayInfo, 1500);
});

// SETTING THE GAME TO ITS DEFAULT STATE ON CLICK OF THE INFO BTN
infoBtn.addEventListener("click", function () {
  // DISPLAYING THE START PAGE
  start.classList.remove("hidden");
  game.classList.add("hidden");

  // HIDING THE INFO DIV
  infoDiv.style.display = "none";

  // ADDING THE DEFAULT CLASSES AND SETTING THE DEFAULT SRC ATTRIBUTES TO THE COMPUTER HAND
  computerOption.classList.add("comp-opt");
  computerOption.classList.remove("opt");
  computerOption.classList.remove(comphand);
  computerOptionImg.setAttribute("src", "");

  // REMOVING THE PLAYERHAND CLASS
  playerOption.classList.remove(playerhand);
});

// FUNCTION TO WIPE THE SCORE STORED IN THE LOCAL STORAGE
const remove = function () {
  localStorage.removeItem("score");
  scoreCard.textContent = score;
};

// remove();
