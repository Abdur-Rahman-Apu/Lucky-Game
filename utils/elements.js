const form = document.forms[0];
const textInputElm = form.winingScore;
const submitBtn = form[1];
const resetBtn = form[2];

const winingScore = document.querySelector(".wining-score");

const player1Point = document.querySelector(".player1-point");
const player2Point = document.querySelector(".player2-point");

const player1Btn = document.querySelector("button.player-1");
const player2Btn = document.querySelector("button.player-2");

const winnerNameElm = document.querySelector(".winner-name");

export {
  form,
  player1Btn,
  player1Point,
  player2Btn,
  player2Point,
  resetBtn,
  submitBtn,
  textInputElm,
  winingScore,
  winnerNameElm,
};
