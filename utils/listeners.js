import {
  form,
  player1Btn,
  player2Btn,
  resetBtn,
  submitBtn,
  textInputElm,
} from "./elements.js";
import { handleSubmitBtn } from "./formHandle.js";
import { handleTypingSound } from "./handlers.js";

const handleTypingListeners = () => {
  textInputElm.addEventListener("keypress", handleTypingSound);

  const needTypingSoundOnBtn = [submitBtn, resetBtn, player1Btn, player2Btn];

  needTypingSoundOnBtn.forEach((elm) => {
    elm.addEventListener("click", handleTypingSound);
  });
};

const handleSubmitBtnListener = (winingScore) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newWiningScore = handleSubmitBtn();

    if (newWiningScore) {
      winingScore = newWiningScore;
    }
    form.reset();
  });

  return winingScore;
};

export { handleSubmitBtnListener, handleTypingListeners };
