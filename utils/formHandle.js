import { form, winingScore } from "./elements.js";
import { handleErrorSound } from "./handlers.js";

const isInputValid = (value) => {
  let inputValue = value;
  const isValid = !isNaN(parseFloat(inputValue)) && inputValue > 0;
  return isValid;
};

const handleSubmitBtn = () => {
  const inputValue = +form.winingScore.value;
  const isValid = isInputValid(inputValue);

  if (isValid) {
    winingScore.textContent = inputValue;
    return inputValue;
  } else {
    handleErrorSound();
    alert("Please enter a valid number. Number must be greater than 0");
  }
};

export { handleSubmitBtn, isInputValid };
