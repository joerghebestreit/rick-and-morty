import { createCharacterCardComponent } from "./lib/characterCard.js";
import { fetchCharacterCards } from "./lib/api.js";

const searchButton = document.querySelector(".header__search-button");
const filterDropdown = document.querySelector(".header__filter");
const main = document.querySelector(".main");

searchButton.addEventListener("click", () => {
  const status = filterDropdown.value;
  clearCharacterCards();
  fetchCharacterCards(status).then((characterCards) => {
    characterCards.results.forEach((characterCard) => {
      createCharacterCardComponent(characterCard);
    });
  });
});

function clearCharacterCards() {
  const characterCardElements = document.querySelectorAll(".characterCard");
  characterCardElements.forEach((characterCardElement) => characterCardElement.remove());
}