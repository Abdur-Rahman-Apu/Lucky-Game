import {
  player1Btn,
  player1Point,
  player2Btn,
  player2Point,
  winingScore,
} from "./elements.js";
import { handleBtnDisableAttr } from "./handlers.js";
import { player1BtnListener, player2BtnListener } from "./listeners.js";

const getRandomWinningScore = () => {
  const score = Math.ceil(Math.random() * 18 + 2);

  winingScore.textContent = score;

  return score;
};

const getRandomTurn = () => {
  return Math.floor(Math.random() * 2);
};

const getInitialValues = (playVariables) => {
  let winScore = getRandomWinningScore();
  let turn = getRandomTurn();
  let player1Score = 0;
  let player2Score = 0;

  playVariables = { winScore, turn, player1Score, player2Score };

  console.log(playVariables);

  if (turn) {
    handleBtnDisableAttr(player1Btn, player2Btn);
  } else {
    handleBtnDisableAttr(player2Btn, player1Btn);
  }

  player1Point.textContent = playVariables.player1Score;
  player2Point.textContent = playVariables.player2Score;
  return playVariables;
};

const play = (playVariables) => {
  player1BtnListener(playVariables);
  player2BtnListener(playVariables);
};

export { getInitialValues, getRandomTurn, getRandomWinningScore, play };
