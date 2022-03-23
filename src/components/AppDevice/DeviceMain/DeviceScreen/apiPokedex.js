import Pokedex from "pokedex-promise-v2";
const P = new Pokedex();

const getPokemon = (startIndex) => {
  const pokemonInfoList = new Array(5).fill(0).map(() => {
    const res = P.getPokemonByName(startIndex);
    startIndex += 1;
    return res;
  });
  const data = Promise.allSettled(pokemonInfoList);
  return data;
};

export const formatedPokemonData = async (start) => {
  const pokemonData = await getPokemon(start);
  const formattedData = pokemonData.map((item) => {
    const promisedValue = item.value;
    const res = {
      name: promisedValue.name,
      order: start,
      pixelSprite: promisedValue.sprites.front_default,
      sprite: promisedValue.sprites.other["official-artwork"].front_default,
    };
    start += 1;
    return res;
  });
  return formattedData;
};
