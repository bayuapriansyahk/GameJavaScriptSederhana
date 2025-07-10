const container = document.querySelector("#container");
const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const pokemonImg = document.querySelector("img");
const label = document.querySelector(".label");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

const randomPokemon = () => {
  const mulai = setInterval(() => {
    const random = Math.floor(Math.random() * 1025) + 1;

    pokemonImg.src = `${url}${random}.png`;
    h1.innerText = `Pilih Pokemonmu`;

    if (random < 10) {
      label.innerText = `#000${random}`;
    } else if (random < 100) {
      label.innerText = `#00${random}`;
    } else if (random < 1000) {
      label.innerText = `#0${random}`;
    } else {
      label.innerText = `#${random}`;
    }
  }, 100);

  setTimeout(() => {
    clearInterval(mulai);
    button.innerText = "Pilih Lagi";
    h1.innerText = `Pokemonmu Adalah`;
  }, 5000);
};

button.addEventListener("click", randomPokemon);
