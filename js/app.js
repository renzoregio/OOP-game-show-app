/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Experiment
const add = document.querySelector(".js-add-words");
const arr = [];
add.addEventListener("click", (e) => {
  add.textContent = "Add word";
  const input = document.querySelector(".js-input");
  let inputValue = input.value;
  input.style.display = "block";
  const phrase = new Phrase(inputValue);
  arr.push(phrase);
  input.value = "";
});
const phraseArray = [];
const phrase1 = new Phrase("I love JS");
const phrase2 = new Phrase("Hi");
const phrase3 = new Phrase("this");
const phrase4 = new Phrase("is");
const phrase5 = new Phrase("cool");
function letters() {
  if (arr.length !== 0) {
    const game = new Game(arr); //experiment
    return game;
  } else {
    phraseArray.push(phrase1, phrase2, phrase3, phrase4, phrase5);

    const game = new Game(phraseArray);
    console.log(phraseArray);
    return game;
  }
}

// end

const keys = document.querySelectorAll(".key");
const btn = document.querySelector("#btn__reset");

btn.addEventListener("click", function () {
  const game = letters();
  game.startGame();
});

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const game = letters();
    game.handleInteraction(e.target);
  });
});