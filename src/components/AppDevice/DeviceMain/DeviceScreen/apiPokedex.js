import Pokedex from "pokedex-promise-v2";
const P = new Pokedex();

export const getPokemon = (url) => {
  return fetch(url).then((response) => {
    return response.json();
  });
};

export const formatedPokemonData = (pokemonData) => {
  const formattedData = {
    name: pokemonData.name,
    pixelSprite: pokemonData.sprites.front_default,
    sprite: pokemonData.sprites.other["official-artwork"].front_default,
  };
  console.log(formattedData);
  return formattedData;
};

export const getPokemonList = async () => {
  const { results } = await P.getPokemonsList();
  return results;
};

// P.getPokemonsList().then((data) => console.log(data));
