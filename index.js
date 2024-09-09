import {
  handleSubmitBtnListener,
  handleTypingListeners,
  resetBtnListener,
} from "./utils/listeners.js";
import { getInitialValues, play } from "./utils/play.js";

(function () {
  let playVariables = {
    winScore: 0,
    turn: 0,
    player1Score: 0,
    player2Score: 0,
  };

  // typing sound
  handleTypingListeners();

  playVariables = getInitialValues(playVariables);
  console.log(playVariables);

  handleSubmitBtnListener(playVariables);

  play(playVariables);

  playVariables = resetBtnListener(playVariables);
})();
