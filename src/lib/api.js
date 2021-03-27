const BASE_URL = "https://rickandmortyapi.com/api/character";

export function fetchCharacterCards(status) {
  let url = BASE_URL;
  if (status === "alive") {
    url = `${BASE_URL}/?status=alive`;
  } else if (status === "dead") {
    url = `${BASE_URL}/?status=dead`;
  } else if (status === "unknown") {
    url = `${BASE_URL}/?status=unknown`;
  } else if (status === "all") {
    url = `https://rickandmortyapi.com/api/character/?status`;
  }
  return fetch(url).then((res) => res.json());
}