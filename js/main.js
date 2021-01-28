"use strict";
const inputElement = document.querySelector(".js-number");
const buttonElement = document.querySelector(".js-button");
const randomNumber = getRandomNumber(100);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(randomNumber);

function handleCheckNumber() {
  const inputValue = inputElement.nodeValue;
  console.log(inputValue);
}

buttonElement.addEventListener("click", handleCheckNumber);
