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
import playVariables from "./variables.js";

const handleTypingListeners = () => {
  textInputElm.addEventListener("keypress", handleTypingSound);

  const needTypingSoundOnBtn = [submitBtn, resetBtn, player1Btn, player2Btn];

  needTypingSoundOnBtn.forEach((elm) => {
    elm.addEventListener("click", handleTypingSound);
  });
};

const handleSubmitBtnListener = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newWiningScore = handleSubmitBtn();

    if (newWiningScore) {
      playVariables.winScore = newWiningScore;
    }
    form.reset();
  });
};

const resetBtnListener = () => {
  resetBtn.addEventListener("click", () => {
    getInitialValues();
    console.log(playVariables);
  });
  console.log(playVariables);
  // return playVariables;
};

const player1BtnListener = () => {
  player1Btn.addEventListener("click", () => {
    playVariables.player1Score++;
    playVariables.turn = 1;
    player1Point.textContent = playVariables.player1Score;
    handleBtnDisableAttr(player1Btn, player2Btn);
    handleDecideWinner();
  });
};
const player2BtnListener = () => {
  player2Btn.addEventListener("click", () => {
    playVariables.player2Score++;
    playVariables.turn = 0;
    player2Point.textContent = playVariables.player2Score;
    handleBtnDisableAttr(player2Btn, player1Btn);
    handleDecideWinner();
  });
};

export {
  handleSubmitBtnListener,
  handleTypingListeners,
  player1BtnListener,
  player2BtnListener,
  resetBtnListener,
};
