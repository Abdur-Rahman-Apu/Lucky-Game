import {
  handleSubmitBtnListener,
  handleTypingListeners,
} from "./utils/listeners.js";
import { getInitialValues } from "./utils/play.js";

(function () {
  // typing sound
  handleTypingListeners();

  let { winScore, turn, player1Score, player2Score } = getInitialValues();

  winScore = handleSubmitBtnListener(winScore);
})();
