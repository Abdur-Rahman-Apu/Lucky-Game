import {
  handleSubmitBtnListener,
  handleTypingListeners,
  resetBtnListener,
} from "./utils/listeners.js";
import { getInitialValues, play } from "./utils/play.js";
import playVariables from "./utils/variables.js";

(function () {
  // typing sound
  handleTypingListeners();

  // playVariables = getInitialValues(playVariables);
  // console.log(playVariables);

  // handleSubmitBtnListener(playVariables);

  // playVariables = resetBtnListener(playVariables);
  // play(playVariables);
  // playVariables = getInitialValues(playVariables);

  getInitialValues();
  console.log(playVariables);

  handleSubmitBtnListener();

  resetBtnListener();
  play();
})();
