import { winingScore } from "./elements.js";

const getRandomWinningScore = () => {
  const winningScore = Math.ceil(Math.random() * 18 + 2);

  winingScore.textContent = winningScore;
};

export { getRandomWinningScore };
