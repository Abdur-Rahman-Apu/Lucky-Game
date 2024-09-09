import { winingScore } from "./elements.js";

const getRandomWinningScore = () => {
  const score = Math.ceil(Math.random() * 18 + 2);

  winingScore.textContent = score;

  return score;
};

const getRandomTurn = () => {
  return Math.floor(Math.random() * 2);
};

const getInitialValues = () => {
  let winScore = getRandomWinningScore();
  let turn = getRandomTurn();
  let player1Score = 0;
  let player2Score = 0;

  return { winScore, turn, player1Score, player2Score };
};

export { getInitialValues, getRandomTurn, getRandomWinningScore };
