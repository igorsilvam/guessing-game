const displayOne = document.querySelector(".displayOne");
const displayTwo = document.querySelector(".displayTwo");
const btnSend = document.querySelector("#btnSend");
const btnReset = document.querySelector("#btnReset");
let valueNumber = document.querySelector("#valueNumber");
let randomNumber = Math.round(Math.random() * 10);
let attempts = 0;

function handleSend(event) {
  event.preventDefault();
  attempts++;
  if (Number(valueNumber.value) == randomNumber) {
    toggleDisplay();
    displayTwo.querySelector(
      "h1"
    ).innerText = `Acertou em ${attempts} tentativas!`;
  } else {
    valueNumber.value = "";
    alert("Você errou, tente novamente!");
  }
}

function keydownDisplay(event) {
  if (event.key == "enter" && displayOne.classList.contains("hide")) {
    handleSend();
  }
}

function handleReset() {
  toggleDisplay();
  valueNumber.value = "";
  randomNumber = Math.round(Math.random() * 10);
  attempts = 0;
}

function toggleDisplay() {
  displayOne.classList.toggle("hide");
  displayTwo.classList.toggle("hide");
}

document.addEventListener("keydown", keydownDisplay);
btnSend.addEventListener("click", handleSend);
btnReset.addEventListener("click", handleReset);
