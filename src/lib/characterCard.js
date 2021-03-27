
const main = document.querySelector("main");

export function createCharacterCardComponent(characterCard) {

  const section = document.createElement('section');
  section.classList.add("characterCard");
  main.append(section);


  const h3 = document.createElement("h3");
  h3.textContent = characterCard.name
  const img = document.createElement("img");
  img.src = characterCard.image;
  img.alt = characterCard.name;

  section.append(h3);
  section.append(img);

  if (characterCard.status === "Alive") {
      section.style.background = "var(--color-primary)";
    } else if (characterCard.status === "dead") {
      section.style.background = "var(--color-accent)";
    } else if (characterCard.status === "unknown") {
      section.style.background = "var(--color-secondary)";
    }
};