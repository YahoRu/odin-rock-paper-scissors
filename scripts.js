const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const draw = "Draw!";
const youWin = "You win!";
const youLose = "You lose!";
const winCondition = 3;
const userChooseNothing = "You choose nothing, auto lose!";

let playerSelection = 'None';
let playersScore = 0;
let computersScore = 0;

let announcerText = document.querySelector(".announcer");
let elements = document.querySelectorAll("button.element");
let startButton = document.querySelector("button.start");

elements.forEach((element) => {
  element.addEventListener("click", getPlayersChoice);
});


startButton.addEventListener("click", game);

function blockStartButton() {
  startButton.textContent = "In game";
  startButton.disabled = true;
}

function unblockStartButton() {
  startButton.textContent = "Start game";
  startButton.disabled = false;
}

function getPlayersChoice(e) {
  playerSelection = e.target.value;
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      return ROCK;
    case 2:
      return PAPER;
    case 3:
      return SCISSORS;
  }
}

function rockPaperScissorsRound(playerSelection, computerSelection) {
  if (playerSelection === 'None') return userChooseNothing;

  else if (playerSelection === ROCK && computerSelection === ROCK) 
    return draw;
  else if (playerSelection === ROCK && computerSelection === PAPER)
    return youLose;
  else if (playerSelection === ROCK && computerSelection === SCISSORS)
    return youWin;

  else if (playerSelection === PAPER && computerSelection === ROCK)
    return youWin;
  else if (playerSelection === PAPER && computerSelection === PAPER)
    return draw;
  else if (playerSelection === PAPER && computerSelection === SCISSORS)
    return youLose;

  else if (playerSelection === SCISSORS && computerSelection === ROCK)
    return youLose;
  else if (playerSelection === SCISSORS && computerSelection === PAPER)
    return youWin;
  else if (playerSelection === SCISSORS && computerSelection === SCISSORS)
    return draw;
}

async function game() {
  blockStartButton();

  playersScore = 0;
  computersScore = 0;
  document.querySelector(".player-score").textContent = playersScore;
  document.querySelector(".computer-score").textContent = computersScore;


  while (playersScore !== winCondition && computersScore !== winCondition) {
    announcerText.textContent = "One!";
    await new Promise((r) => setTimeout(r, 1000));
    announcerText.textContent = "Two!";
    await new Promise((r) => setTimeout(r, 1000));
    announcerText.textContent = "Three!";
    playerSelection = 'None';
    await new Promise((r) => setTimeout(r, 1000));

    let computerSelection = getComputerChoice();
    let result = rockPaperScissorsRound(playerSelection, computerSelection);

    if (result === userChooseNothing) {
      computersScore += 1;
      document.querySelector(".computer-score").textContent = computersScore;
    } 
    else if (result === youWin) {
      playersScore += 1;
      document.querySelector(".player-score").textContent = playersScore;
    } 
    else if (result === youLose) {
      computersScore += 1;
      document.querySelector(".computer-score").textContent = computersScore;
    }

    announcerText.textContent = `${result} Your ${playerSelection} vs Computer\`s ${computerSelection}.`;

    await new Promise((r) => setTimeout(r, 2000));
  }

  if (playersScore > computersScore) {
    announcerText.textContent = `You win Best Of Three! Score: ${playersScore} - ${computersScore}.`;
  }
  else {
    announcerText.textContent = `You lose Best Of Three! Score: ${playersScore} - ${computersScore}.`;
  }

  unblockStartButton();
}