"use strict";

const inputElement = document.querySelector(".js-number");
const buttonElement = document.querySelector(".js-button");
const randomNumber = getRandomNumber(100);
const trackElement = document.querySelector(".js-track");
const attemptsElement = document.querySelector(".js-attempts");
let result = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(randomNumber);

function handleGuessNumber() {
  CheckNumber();
  AddAttempts();
  // preventFormSubmit();
}

function renderTip (message){
  trackElement.value = "Pista: " + message;
}

function CheckNumber() {
  const inputValue = parseInt(inputElement.value);
  if (isNaN(inputValue)) {   // igual que inputValue ==== ""  
  renderTip("El número debe estar entre 1 y 100"); 
  } else if (inputValue < 1 || inputValue > 100) {
    renderTip("El número debe estar entre 1 y 100");
  } else if (inputValue === randomNumber + 1 || inputValue === randomNumber - 1) {
    renderTip("Uyyy por los pelos");
  } else if (inputValue > randomNumber) {
    renderTip("Demasiado alto");
  } else if (inputValue < randomNumber) {
    renderTip("Demasiado bajo");
  } else if (inputValue === randomNumber) {
    renderTip("Has ganado campeona!!!");
  }
}
function AddAttempts() {
  result += 1;
  attemptsElement.value = "Número de intentos: " + result;
}
// function preventFormSubmit(event) {
//   event.preventDefault();
// }

buttonElement.addEventListener("click", handleGuessNumber);
