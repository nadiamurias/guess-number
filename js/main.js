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

function handleCheckNumber() {
  const inputValue = inputElement.value;
  console.log(inputValue);
  if (inputValue > 100) {
    trackElement.value = "El número debe estar entre 1 y 100";
    console.log(trackElement.value);
  } else if (inputValue > randomNumber) {
    trackElement.value = "Demasiado alto";
    console.log(trackElement.value);
  } else if (inputValue < randomNumber) {
    trackElement.value = "Demasiado bajo";
    console.log(trackElement.value);
  } else if (inputValue == randomNumber) {
    trackElement.value = "Has ganado campeona!!!";
    console.log(trackElement.value);
  }
}
function handleAddAttempts() {
  result += 1;
  attemptsElement.value = "Número de intentos: " + result;
}

buttonElement.addEventListener("click", handleAddAttempts);

buttonElement.addEventListener("click", handleCheckNumber);
