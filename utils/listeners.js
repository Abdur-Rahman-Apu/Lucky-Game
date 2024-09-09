import {
  form,
  player1Btn,
  player1Point,
  player2Btn,
  player2Point,
  resetBtn,
  submitBtn,
  textInputElm,
} from "./elements.js";
import { handleSubmitBtn } from "./formHandle.js";
import {
  handleBtnDisableAttr,
  handleDecideWinner,
  handleTypingSound,
} from "./handlers.js";
import { getInitialValues } from "./play.js";

const handleTypingListeners = () => {
  textInputElm.addEventListener("keypress", handleTypingSound);

  const needTypingSoundOnBtn = [submitBtn, resetBtn, player1Btn, player2Btn];

  needTypingSoundOnBtn.forEach((elm) => {
    elm.addEventListener("click", handleTypingSound);
  });
};

const handleSubmitBtnListener = (playVariables) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newWiningScore = handleSubmitBtn();

    if (newWiningScore) {
      playVariables.winingScore = newWiningScore;
    }
    form.reset();
  });
};

const resetBtnListener = (playVariables) => {
  resetBtn.addEventListener("click", () => {
    playVariables = getInitialValues(playVariables);
  });

  return playVariables;
};

const player1BtnListener = (playVariables) => {
  player1Btn.addEventListener("click", (e) => {
    playVariables.player1Score++;
    playVariables.turn = 1;
    player1Point.textContent = playVariables.player1Score;
    handleBtnDisableAttr(player1Btn, player2Btn);
    handleDecideWinner(playVariables);
  });
};
const player2BtnListener = (playVariables) => {
  player2Btn.addEventListener("click", (e) => {
    playVariables.player2Score++;
    playVariables.turn = 0;
    player2Point.textContent = playVariables.player2Score;
    handleBtnDisableAttr(player2Btn, player1Btn);
    handleDecideWinner(playVariables);
  });
};

export {
  handleSubmitBtnListener,
  handleTypingListeners,
  player1BtnListener,
  player2BtnListener,
  resetBtnListener,
};
