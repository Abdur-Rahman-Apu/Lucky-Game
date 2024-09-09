import {
  boardButtonContainer,
  player1Btn,
  player1Point,
  player2Btn,
  player2Point,
  winingScore,
  winnerNameContainer,
} from "./elements.js";
import { handleBtnDisableAttr } from "./handlers.js";
import { player1BtnListener, player2BtnListener } from "./listeners.js";
import playVariables from "./variables.js";

const getRandomWinningScore = () => {
  const score = Math.ceil(Math.random() * 18 + 2);

  winingScore.textContent = score;

  return score;
};

const getRandomTurn = () => {
  return Math.floor(Math.random() * 2);
};

const getInitialValues = () => {
  playVariables.winScore = getRandomWinningScore();
  playVariables.turn = getRandomTurn();
  playVariables.player1Score = 0;
  playVariables.player2Score = 0;

  // playVariables = { winScore, turn, player1Score, player2Score };

  console.log(playVariables);

  if (playVariables.turn) {
    handleBtnDisableAttr(player1Btn, player2Btn);
  } else {
    handleBtnDisableAttr(player2Btn, player1Btn);
  }

  player1Point.textContent = playVariables.player1Score;
  player2Point.textContent = playVariables.player2Score;

  boardButtonContainer.style.display = "flex";
  winnerNameContainer.style.display = "none";

  // return playVariables;
};

const play = () => {
  player1BtnListener();
  player2BtnListener();
};

export { getInitialValues, getRandomTurn, getRandomWinningScore, play };
