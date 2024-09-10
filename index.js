import {
  handleSubmitBtnListener,
  handleTypingListeners,
  resetBtnListener,
} from "./utils/listeners.js";
import { getInitialValues, play } from "./utils/play.js";

(function () {
  handleTypingListeners();

  getInitialValues();

  handleSubmitBtnListener();

  resetBtnListener();

  play();
})();
