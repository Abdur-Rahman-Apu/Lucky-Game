import { textInputElm } from "./utils/elements.js";
import { handleTypingSound } from "./utils/formHandle.js";
import { getRandomWinningScore } from "./utils/play.js";

(function () {
  // initially set random winning score
  getRandomWinningScore();

  // typing sound for input box
  textInputElm.addEventListener("keypress", handleTypingSound);
})();
