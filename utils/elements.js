const form = document.forms[0];
const textInputElm = form.winingScore;
const submitBtn = form[1];
const resetBtn = form[2];

const winingScore = document.querySelector(".wining-score");

const player1Point = document.querySelector(".player1-point");
const player2Point = document.querySelector(".player2-point");

const boardButtonContainer = document.querySelector(".board-btn");

const player1Btn = document.querySelector("button.player-1");
const player2Btn = document.querySelector("button.player-2");

const winnerNameContainer = document.querySelector(".winning-msg");
const winnerNameElm = document.querySelector(".winner-name");

const playerTurnContainer = document.querySelector(".player-turn");
const playerTurn = document.querySelector(".turn");

export {
  boardButtonContainer,
  form,
  player1Btn,
  player1Point,
  player2Btn,
  player2Point,
  playerTurn,
  playerTurnContainer,
  resetBtn,
  submitBtn,
  textInputElm,
  winingScore,
  winnerNameContainer,
  winnerNameElm,
};
