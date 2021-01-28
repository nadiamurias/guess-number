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
}

function CheckNumber() {
  const inputValue = parseInt(inputElement.value);
  if (isNaN(inputValue)) {
    // igual que inputValue ==== ""
    trackElement.value = "El número debe estar entre 1 y 100";
  } else if (inputValue < 1 || inputValue > 100) {
    trackElement.value = "El número debe estar entre 1 y 100";
  } else if (inputValue > randomNumber) {
    trackElement.value = "Demasiado alto";
  } else if (inputValue < randomNumber) {
    trackElement.value = "Demasiado bajo";
  } else if (inputValue === randomNumber) {
    // podemos quitar el if ya que es la última condición
    trackElement.value = "Has ganado campeona!!!";
  }
}
function AddAttempts() {
  result += 1;
  attemptsElement.value = "Número de intentos: " + result;
}

buttonElement.addEventListener("click", handleGuessNumber);
