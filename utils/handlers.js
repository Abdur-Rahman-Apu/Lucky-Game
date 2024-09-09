import {
  boardButtonContainer,
  winnerNameContainer,
  winnerNameElm,
} from "./elements.js";

const handleAudio = (src) => {
  const audio = new Audio();
  audio.src = src;
  audio.play();
};

const handleTypingSound = () => {
  handleAudio("assets/audio/typing.mp3");
};

const handleErrorSound = () => {
  handleAudio("assets/audio/error.mp3");
};

const handleBtnDisableAttr = (elm1, elm2) => {
  elm1.setAttribute("disabled", true);
  elm2.removeAttribute("disabled");
};

const handleDecideWinner = (playVariables) => {
  const { player1Score, player2Score, winScore } = playVariables;

  const isPlayer1Win = player1Score === winScore;
  const isPlayer2Win = player2Score === winScore;

  console.log(isPlayer1Win, isPlayer2Win, playVariables);

  if (isPlayer1Win || isPlayer2Win) {
    boardButtonContainer.style.display = "none";
    winnerNameElm.textContent = isPlayer1Win ? "Player 1" : "Player 2";
    winnerNameContainer.style.display = "block";
  }
};

export {
  handleBtnDisableAttr,
  handleDecideWinner,
  handleErrorSound,
  handleTypingSound,
};
